const express = require('express');
const app= express();

const postRoutes = require('./routes/postRoutes');
 // Middleware to parse JSON bodies
app.use(express.json());

//middleware logging
app.use((req,res,next)=>{
    console.log(`date is : [${new Date().toISOString()}] \n the method used is :  ${req.method} \n the url is: ${req.url}`);
    next();
});

//middleware error handling 
app.use((err,req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({
        error : 'Something went wrong',
        message: err.message
    });
})

//routes
app.use('/blogs',postRoutes);


app.listen(8000,()=>{
    console.log('server listening on port 8000');
});