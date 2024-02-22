const express = require('express');
//middleware to parse incoming request bodies
const bodyParser = require('body-parser');
//middleware to parse cookies in the request header
const cookieParser = require('cookie-parser');
//middleware for managing sessions
const session = require('express-session');
const app = express();

app.use()
// Middleware
/*
bodyParser.urlencoded({ extended: true }): parses inciming request bodies in uRl-encoded format
*/ 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
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

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Authenticate user (vulnerable code for the challenge)
  if (username === 'admin' && password === 'password' ) {
    req.session.authenticated = true;
    res.redirect('/profile');
  } else {
    res.send('Invalid username or password');
  }
});
//!didn't use the escape-html to prevent XSS
app.get('/profile', (req, res) => {
  if (req.session.authenticated) {
    res.send(`<h1>Welcome to your profile, ${req.session.username}</h1>`);
  } else {
    res.redirect('/login');
  }
});

// Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
