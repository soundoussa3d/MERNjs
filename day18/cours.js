/*
we use :
  =>app.use(callback);
  the function takes 3 params:
  =>req,res,next
*/
//logging middleware 
//authentication middleware
const express = require('express');
const app= express();

//Middleware1: Logging middleware
app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

//Middleware2:Authentication middleware
app.use((req,res,next)=>{
    //In a real application ,perform actual authentication logic here
    const isAuthenticated = true;//Assuming the user is authenticated
    if (isAuthenticated) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.get('/example',(req,res)=>{
    console.log('handling the /example route');
    res.send('Hello,this is the response!');
})
app.listen(3000,()=>{
    console.log('server listening on port 3004');
})