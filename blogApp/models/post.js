const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: { type:String,required:true },
        content:{type:String,required: true },
    },
    {
        timestamps : {type:Date,default : new Date()}
    }
);

const Post=mongoose.model('Post',postSchema);

module.exports = Post;