//npm install express
const express = require('express');
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});

/*pagination :
/products?limit=25&offset=50
*/

/*
version
/v1/products
/v2/products
*/ 