const mongoose = require('mongoose');
const Product = require('./Models/product.model');
const Category= require('./Models/category.model');
//connect to database
async function connect() {
    return await mongoose
    .connect('mongodb://localhost:27017/mydb1')
    .then(()=>console.log('Connected to database'))
    .catch((err)=>console.log('Error: ' + err)); 
}
connect();


//!create new products
const newProduct = new Product(
    {
        name:"hp elitebook",
        price : 8000,
        description :"HELLO hp elitebook"
    }
);
const newProduct2 = new Product(
    {
        name:"mac 12",
        price : 100000,
        description :"HELLO mac 12"
    }
);
/*const newProduct3 = new Product(
    {
        name:"sams",
        price : 5000,
        description :"HELLO sams"
    }
);*/

async function addProduct(newProduct) {
    try {
        const result = await newProduct
        .save();
        console.log("Product added successfully : " + result);
      } catch (err) {
        console.error('Error adding product:', err);
      }
}
//addProduct(newProduct);
//addProduct(newProduct2);


//*retrieve all the data from the database

async function getAllData() {
    try{
       const result = await Product.find();
       console.log(result);
     }catch(e){
       return console.error(e);
     }
   }
//getAllData();

//*sort products by price

async function sortedPrice() {
    try{
       const result = await Product.find().sort({ price: -1 });
       console.log(result);
     }catch(e){
       return console.error(e);
     }
   }
//sortedPrice();

//* pagination - limiting results
async function pagination() {
    try {
        const result = await Product.find().limit(1);
        console.log(result);
    } catch (error) {
        return error;
    }
}
//pagination();

//*custom pagination with variables
async function custumPagination() {
    try{
        const pageSize = 2;
        const pageNumber = 3;
        
       await Product.find().skip((pageNumber - 1) * pageSize)
       .limit(pageSize)
       .then((result) => {
       console.log(result);});
     }catch(e){
       return console.error(e);
     }
   }
//custumPagination();

//*aggregation -count products in Stock 
async function countProducts() {
    try {
        const result = await Product.aggregate([
            {
              $group: {
                _id: "$inStock",
                count: { $sum: 1 },
              },
            },
          ]);
          console.log(result);
    } catch (error) {
        return error
    }
}
//countProducts();


//*sorting products by name in ascending order
async function sortingNames() {
    try {
        const result = await Product.find().sort({ name: 1 })
        console.log(result);
    } catch (error) {
        return error;
    }
}
//sortingNames();

//*Aggregate - group products by category 
async function groupingByCategory(){
    try {
        const result = await Product.aggregate({
            $group :{
                _id : "$category"
            }
        });
        console.log(result);
    } catch (error) {
        return error;
    }
}

//*Pagination - Dynamic results with a variable 
async function pagination() {
    try {
        const result = await Product.find().limit(1);
        console.log(result);
    } catch (error) {
        return error;
    }
}
//pagination();