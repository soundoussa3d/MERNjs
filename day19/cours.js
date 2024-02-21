//routers {}
const express = require('express');
const app = express();
const router= express.Router();
router.get('/',(req,res)=>{
    console.log('hi');
    res.send('hello');
});
app.use('/api',router);
app.listen(3000,()=>{
    console.log('server listenning to port 3000');
})

const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);