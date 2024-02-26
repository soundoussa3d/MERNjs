const express = require('express');
const bcrypt = require('bcrypt');
const app = express();


// Assuming this is the plaintext password you want to verify
const password = 'password';


// Generate a salt
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

        // Store the hashed password in your database
        handleHashedPassword(hash);
    });
});

// Compare the plaintext password with the hashed password
function handleHashedPassword(hash) {
    bcrypt.compare(password, hash, (err, result) => {
        if (err) {
            console.error('Error comparing passwords:', err);
            return;
        }
    
        if (result) {
            console.log('Passwords match');
            return true;
        } else {
            console.log('Passwords do not match');
            return false;
        }
    });
}


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});