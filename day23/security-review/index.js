const express = require('express');
const fs = require('fs');
const users= require('./data.json');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

//crypt a password 
const bcrypt = require('bcrypt');

// Middleware to parse JSON bodies
app.use(express.json());

app.use(
  session({
    secret: 'mySecretKey', // Secret key used to sign the session ID cookie
    resave: false, // Whether to save the session for every request, even if it hasn't changed
    saveUninitialized: true // Whether to save uninitialized sessions (new but not modified)
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());


app.use(session({ 
  secret: 'your-secret-key', 
  resave: true, 
  saveUninitialized: true 
})
);

// Routes

function hashpassword(username,password ,  callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
        console.error('Error generating salt:', err);
        return;
    }
    // Hash the password using the salt
    bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }

         // Store the hashed password in a JSON file
        const data = { 
          id:users.length+1,
          username : username,
          password: hash
        };
        callback(data);
    });
});
}

app.get('/', (req, res) => {
  res.send('Welcome to the Sample Vulnerable Node.js Application');
});

//registration endpoint
app.post('/register', (req, res) => {
   const  { username, password } = req.body;
   if (!username || !password ) {
    return res.json({
      message: "fill all the data needed"    });
   }
   const user =users.find(u=>u.username==username);
   if (user) {
    return res.status(400).json({message:"User already exists!"});
   }
   hashpassword(username, password, (hashedPassword) => {
    users.push(hashedPassword)
    fs.writeFile('data.json', JSON.stringify(users), (err) => {
      if (err) {
          console.error('Error writing to file:', err);
          return;
      }
      res.json({message:'data saved to file'})
  });
   
});
   
});


//login endpoint
app.post('/login' ,(req, res) => {
  const { username, password } = req.body;
  if (!username || !password ) {
    return res.json({
      message: "fill all the data needed"    });
  }
  const user = users.find(u=>u.username == username);
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
        console.error('Error comparing passwords:', err);
        return;
    }
    if (!result) {
      res.json({message : 'Passwords do not match'})
    }
    else{
      req.session.id = user.id; // Set the value of the 'username' session variable
      res.cookie('id', req.session.id);
      //res.json({message : 'welcome to your account'});
      res.redirect('/profile');

    }
   
});
  //res.cookie('myCookie', data, { maxAge: 900000, httpOnly: true });
  //res.json("Cookie is set successfully");
});

//render form with csrf token
app.get('/profile',  (req, res) => {
    //const user = req.session.user;
    const cookieData = req.cookies.id; 
    if (!cookieData) {
      res.status(404).json({ message: "not authoraized"});
    }
    const user = users.find(u=>u.id == cookieData.id );
    
    res.json({ user: user});

  });

  app.get('/logout', (req, res) => {
    // Clear the session cookie
    res.clearCookie('myCookie');

    // Destroy the session
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        // Redirect the user to the login page or any other page
        res.redirect('/');
    });
});
  


// Server
app.listen(3000, () => {
  console.log('Server running on port 5000');
});
