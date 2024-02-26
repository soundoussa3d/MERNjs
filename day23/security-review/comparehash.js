const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

// Assuming this is the hashed password retrieved from the database
const hashedPassword = '$2b$10$dlDQ8L5TfKMnlqjWgDurz.UIHeQJvCt/JKmjGuJIHGtdJUVNnZGvK';

// Assuming this is the plaintext password you want to verify
const plaintextPassword = 'password';

// Compare the plaintext password with the hashed password
bcrypt.compare(plaintextPassword, hashedPassword, (err, result) => {
    if (err) {
        console.error('Error comparing passwords:', err);
        return;
    }

    if (result) {
        console.log('Passwords match');
    } else {
        console.log('Passwords do not match');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});