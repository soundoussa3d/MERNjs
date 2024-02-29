const mongoose = require('mongoose');
const Product = require('./Models/product.model');
const Category = require('./Models/category.model');
//const Category= require('./Models/category.model');
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
        name:"samsung s12",
        price : 8000,
        description :"samsung s12 phone",
        category_id: "65e0426fa682b76a71fb6586"
    }
);
const newProduct2 = new Product(
    {
        name:"iphone 12 pro ",
        price : 8000,
        description :"iphone 12 pro phone ",
        category_id: "65e0426fa682b76a71fb6586"
    }
);

//!add Product
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

//!get All data
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
//!sort data by price
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
//!simple pagination
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
//!custom pagination 
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
//!aggregation Count products in stock 
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


//!sorting by name
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


//!Group by category 
//*Aggregate - group products by category  
//a refaire 

async function groupingByCategory() {
    try {
        const result = await Product.aggregate([
            {
                $group: {
                    _id: "$category_id",
                    products: { $push: "$$ROOT.name" }
                }
            }
        ]);
        console.log(result);
    } catch (error) {
        console.error('Error grouping products by category:', error);
    }
}
//groupingByCategory();


//! Dynamic results 
//*Pagination - Dynamic results with a variable 
async function paginationDynamic() {
    try {
        const dynamicPageSize = 4;
        const result = await Product.find().limit(dynamicPageSize);
        console.log(result);
    } catch (error) {
        return error;
    }
}
//paginationDynamic();