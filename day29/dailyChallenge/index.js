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



//!create new product
const newProduct = new Product(
    {
        name:"milk",
        price : 8000,
        description :"cow milk",
        inStock: true,
        category_id: "65e05cdea682b76a71fb658a",
        isDeleted:false,
        expirationDate:"2021-01-01"
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



//!create new products 
//Add this array of sample products to your database
const products = [
    {
      name: 'Laptop',
      price: 1200,
      description: 'High-performance laptop with powerful specs.',
      inStock: true,
    },
    {
      name: 'Smartphone',
      price: 800,
      description: 'Latest smartphone with advanced features.',
      inStock: true,
      category_id: "65e0426fa682b76a71fb6586"
    },
    {
      name: 'Headphones',
      price: 150,
      description: 'Over-ear headphones with noise-cancelling technology.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Smartwatch',
      price: 250,
      description: 'Fitness tracker and smartwatch with health monitoring.',
      inStock: false,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Camera',
      price: 600,
      description: 'Digital camera with high-resolution imaging.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Gaming Console',
      price: 400,
      description: 'Next-gen gaming console for immersive gaming experiences.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Bluetooth Speaker',
      price: 80,
      description: 'Portable Bluetooth speaker with crisp sound.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Tablet',
      price: 300,
      description: 'Slim and lightweight tablet for on-the-go productivity.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Coffee Maker',
      price: 50,
      description: 'Automatic coffee maker for brewing your favorite coffee.',
      inStock: true,
      category_id:"65e05d41a682b76a71fb658b"
    },
    {
      name: 'Fitness Tracker',
      price: 100,
      description: 'Wearable fitness tracker with heart rate monitoring.',
      inStock: false,
      category_id:"65e05d41a682b76a71fb658b"
    },
    {
      name: 'External Hard Drive',
      price: 120,
      description: 'Large-capacity external hard drive for data storage.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Wireless Mouse',
      price: 30,
      description: 'Ergonomic wireless mouse for comfortable computing.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Portable Charger',
      price: 20,
      description: 'Compact portable charger for on-the-go device charging.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Smart Bulbs',
      price: 15,
      description: 'Set of smart bulbs for customizable lighting at home.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Backpack',
      price: 40,
      description: 'Durable backpack with multiple compartments for storage.',
      inStock: true,
      category_id:"65e05d41a682b76a71fb658b"
    },
    {
      name: 'Wireless Earbuds',
      price: 120,
      description: 'True wireless earbuds for immersive audio experiences.',
      inStock: false,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Graphic Tablet',
      price: 200,
      description: 'Digital graphic tablet for artists and designers.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
    {
      name: 'Desk Chair',
      price: 150,
      description: 'Comfortable desk chair with adjustable features.',
      inStock: true,
      category_id:"65e05d41a682b76a71fb658b"
    },
    {
      name: 'Air Purifier',
      price: 80,
      description: 'HEPA air purifier for cleaner and fresher indoor air.',
      inStock: true,
      category_id:"65e05d41a682b76a71fb658b"
    },
    {
      name: 'Electric Toothbrush',
      price: 40,
      description: 'Electric toothbrush for effective dental care.',
      inStock: true,
      category_id: "65e05cdea682b76a71fb658a"
    },
  ];




//!add Products 
async function addProducts(newProducts) {
    try {
        const result = await Product.insertMany(newProducts);
        console.log("Product added successfully : " + result);
      } catch (err) {
        console.error('Error adding product:', err);
      }
}
//addProducts(products);




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
        const result = await Product.find().limit(5);
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




//!1-update product by name

async function updateProduct(name , price) {
   try {
    const result = await Product.findOneAndUpdate({name:name },{ $set: {price: price}});
    console.log("updated successfully : " + result);
   } catch (error) {
    return error;
   }
}
//updateProduct("hp",6000);



//! 2-Soft delete product
async function softDelete(name) {
  try {
    const product = await Product.findOne({name: name});
     if (!product){
        console.log("Product not found");
    }
    else{
      if (product.isDeleted) {
        console.log("Product is already deleted");
      }
      else{
       const result = await Product.updateOne({name: name},{$set :{isDeleted:true } });
        console.log("Product deleted  successfully ");
      }
  }
  } catch (error) {
    return error;
  }
}
//softDelete('hp');


//!3-Hard delete Expired Products
async function hardDeleteProduct() {
  try {
       const result = await Product.deleteMany({expirationDate: {$lt:new Date() }});
       if (!result) {
          console.log('No expired products');
       } else {
        console.log(result.deletedCount+" Products deleted  successfully ");
       }
  } 
  catch (error) {
    return error;
  }
}
//hardDeleteProduct();




//!4-Bulk update Products

async function bulkUpdateProducts() {
  try {
    const result = await Product.updateMany({inStock : true},{$set:{description: "inStock "} });
    console.log("updated successfully");
  } catch (error) {
    return error
  }
}
//bulkUpdateProducts();



//!5-Bulk delete out of Stock Products
async function deleteOutOfStock(){
  try {
   const products = await Product.find({inStock : false})
   if (products==0) {
    console.log("No products out of stock");
   } else {
    const result = await Product.deleteMany({inStock : false});
    console.log(result.deletedCount + " products out of stock deleted successfully");
   }
  } catch (error) {
    return error
  }
}
//deleteOutOfStock();
