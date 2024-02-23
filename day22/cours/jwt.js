const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.post('/login', (req, res) => {
  // Validate user credentials (omitted for brevity)
  const user = { id: 15 }; // Example user object
  const token = jwt.sign({ user: user.id , message : "hi"
}, 'secret_key', { expiresIn: '1h' });

  res.json({ token });
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.get('/protected', ensureToken, (req, res) => {
  jwt.verify(req.token, 'secret_key', (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ data });
    }
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
