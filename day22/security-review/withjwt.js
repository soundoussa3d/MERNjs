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



app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Sample Vulnerable Node.js Application');
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

});

function ensureToken(req,res,next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

//render form with csrf token
app.get('/profile',ensureToken , (req, res) => {
  jwt.verify(req.token,'secret_key',(err,data)=>{
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({data});
    }
})
  
});

// Server
app.listen(3000, () => {
  console.log('Server running on port 5000');
});
