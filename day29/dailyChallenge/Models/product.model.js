const mongoose= require('mongoose');



const productSchema= new mongoose.Schema({
    name: {type : String, required : true},  //product name
    price: { type:Number,required:true ,min:0},
    description:{type:String},
    inStock: {type:Boolean , default:true},
    category_id: {type:mongoose.Schema.Types.ObjectId , ref:"Category"},
    isDeleted : {type:Boolean , default:false},
    expirationDate: {type: Date}
},
{
    timestamps : {type:Date,default : new Date()}
});

const Product = mongoose.model('Product',productSchema);

module.exports= Product;