const mongoose = require('mongoose');

//schema 
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]// Array of ObjectId references to Products
});

const Category=mongoose.Model('Category',categorySchema);

module.exports = Category;