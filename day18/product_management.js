const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

var products= [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

//app.use(express.json());

//Middleware logging
app.use((req,res,next)=>{
    console.log(`Request made at ${new Date().toISOString()} \n The request method is ${req.method}  \n The URL is ${req.url}`);
    next();
})
app.use((err,req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({
        error : 'Something went wrong',
        message: err.message
    });
})



//return all list of products
app.get('/products',(req,res)=>{
    res.send(products);
});

//return a specific  id

app.get('/products/:id',(req,res)=>{
    let product = products.find((f)=>f.id == req.params.id);
    if (!product) {
        throw new Error('no product found') 
    }
    res.send(product);
});


//search for products
app.get('/search', (req, res) => {
    const { q, minPrice, maxPrice } = req.query;
    let results = products;
    // Filter products based on query parameters
    if (q) {
        results = results.filter(product => product.name.toLowerCase().includes(q.toLowerCase()));
    }
    if (minPrice) {
        results = results.filter(product => product.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
        results = results.filter(product => product.price <= parseFloat(maxPrice));
    }

    res.send(JSON.stringify(results));
});

//create a new product
app.post('/products',(req,res)=>{
    const newProd =req.body;
    if (!JSON.stringify(newProd)) {
        throw new Error('no data has been received ') ;
        
    }
    const product = products.find((p)=>p.id === newProd.id);
    if (product) {
        throw new Error('id already exists') ;
    }
    products.push(newProd);
    res.send('product added successfully \n liste of products : '+JSON.stringify(products));
});


//update details of a specific product
app.put('/products/:id',(req,res)=>{
    const product = products.find((p)=>p.id == req.params.id);
    if (!product) {
        throw new Error('no data received') 
    }
    const updatedproduct=req.body;
    products[req.params.id-1]=updatedproduct;
    res.send(JSON.stringify(products));

});

//delete a specific product
app.delete('/products/:id',(req,res)=>{
    let product = products.find((p)=>p.id==req.params.id);
    if (!product) {
        throw new Error('product not found') 
    }
     products = products.filter((product)=>product.id!==parseInt(req.params.id));
    res.send(JSON.stringify(products));
})

app.listen(3000,()=>{
    console.log('server listening to port 4000');
});