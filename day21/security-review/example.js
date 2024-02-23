const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf'); // Import csurf middleware

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Use csurf middleware after cookieParser and session
app.use(csrf({ cookie: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Sample Vulnerable Node.js Application');
});

// Update login route to include CSRF token in the form
app.get('/login', (req, res) => {
  // Render the form with the CSRF token
  //<input type="hidden" name="_csrf" value="${req.csrfToken()}">
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="POST">
    <input type="hidden" name="_csrf" value="${req.csrfToken()}">
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  // Validate CSRF token
  console.log(req.body._csrf);
  console.log(req.csrfToken());
if (req.csrfToken() !== req.body._csrf) {
    return res.status(403).send('Invalid CSRF token');
}

  const { username, password } = req.body;
  if (username === 'admin' && password === 'password' ) {
    req.session.authenticated = true;
    res.redirect('/profile');
  } else {
    res.send('Invalid username or password');
  }
});

app.get('/profile', (req, res) => {
  if (req.session.authenticated) {
    res.send(`<h1>Welcome to your profile, ${req.session.username}</h1>`);
  } else {
    res.redirect('/login');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});