const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, httpOnly: true } // Secure: HttpOnly and Secure flags set
}));

app.get('/set-session', (req, res) => {
  req.session.user = 'soundous';
  //console.log(req.session);
  res.send('Session set '+ req.session.user);
});
const port = 3000;
app.listen(port,()=>console.log( `Server running on server 3000`));