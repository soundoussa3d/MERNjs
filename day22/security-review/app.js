const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const escapeHtml = require('escape-html');
const {check, validationResult } = require('express-validator');
const jwt=require('jsonwebtoken');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

//Routes

app.get('/', (req, res) => {
    res.render('login');
});
app.post('/login',[
    check('username', 'required username').isLength({min:4}),
    check('password','required password').isLength({min:8,max:10})
],(req, res) => {
    
})


const port = 3000;
app.listen(port,()=>console.log( `Server running on http://localhost:${port}/`)); 