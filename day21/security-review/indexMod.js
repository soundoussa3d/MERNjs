const express = require('express');
//middleware to parse incoming request bodies
const bodyParser = require('body-parser');
//middleware to parse cookies in the request header
const cookieParser = require('cookie-parser');
//middleware for managing sessions
const session = require('express-session');
const escapeHtml = require('escape-html');
const {check, validationResult } = require('express-validator');

//to use the csrf 
const csrf = require('csurf');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

// Use csurf middleware after cookieParser and session
app.use(csrf({ cookie: true }));

// Middleware
/*
bodyParser.urlencoded({ extended: true }): parses inciming request bodies in uRl-encoded format
*/ 
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Sample Vulnerable Node.js Application');
});

app.get('/login', (req, res) => {
  res.cookie('CSRF-TOKEN', req.csrfToken());
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="POST">
    <input name="_csrf" value="${req.csrfToken()}"/><br>
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login',[
    check('username', 'required username').isLength({min:4}),
    check('password','required password').isLength({min:8,max:10})
] ,(req, res) => {
  const csrfToken = req.cookies['CSRF-TOKEN'];
  //console.log(req.cookies['CSRF-TOKEN']);
  //console.log(req.body._csrf)
  const { username, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(errors);
  }
  //validate csrf token

  if (csrfToken !== req.body._csrf) {
    //console.log(csrfToken);
    //console.log(req.body._csrf);
    return res.status(403).send('Invalid CSRF token');
  }
  // Authenticate user (vulnerable code for the challenge)
  if (username === 'admin' && password === 'password' ) {
    req.session.authenticated = true;
    res.redirect('/profile');
  } else {
    res.send('Invalid username or password');
  }
});

//render form with csrf token
app.get('/profile', (req, res) => {
  if (req.session.authenticated) {
    const usernamesanitised= escapeHtml(req.session.username);
    //res.render('profile', {csrfToken : req.csrfToken });
   res.send(`<h1>Welcome to your profile, ${usernamesanitised}</h1>`);
  } else {
    res.redirect('/login');
  }
});

// Server
app.listen(3000, () => {
  console.log('Server running on port 5000');
});
