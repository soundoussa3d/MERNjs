const express = require('express');
const app = express();

app.use(express.json());

const users = [
  { username: 'alice', password: 'secret_password' },
  { username: 'bob', password: 'password123' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // Successful authentication
    res.status(200).json({ message: 'Authentication successful' });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Authentication failed' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
