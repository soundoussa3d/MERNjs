const express = require('express');
const app = express();

app.get('/set-cookie', (req, res) => {
    // Insecure: Cookie not set with HttpOnly or Secure flags
    res.cookie('user', 'username', { maxAge: 900000 });
    res.send('Cookie set');
});

const port = 3000;
app.listen(port,()=>console.log( `Server running on server 3000`));