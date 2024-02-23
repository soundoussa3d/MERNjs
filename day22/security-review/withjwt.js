const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const escapeHtml = require('escape-html');
const {check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());


app.use(csrf({ cookie: true }));

app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Sample Vulnerable Node.js Application');
});

app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login',[
    check('username', 'required username').isLength({min:4}),
    check('password','required password').isLength({min:4,max:10})
] ,(req, res) => {
  const { username, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(errors);
  }
  const user = {
    id:10,
    username : username,
    password : password
  };
  const token = jwt.sign({id: user.id, username : user.username, password: user.password },'secret_key', {expiresIn : '60s' }) ;
  
  res.json({token});

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
