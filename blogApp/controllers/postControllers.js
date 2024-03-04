//import mongoose
const mongoose = require('mongoose');
//import the model Post
const Post = require('../models/post');


//establish connection
async function connect() {
    return await mongoose.connect('mongodb://localhost:27017/blogApp')
    .then(()=>console.log('Connected to database'))
    .catch(err => console.log('Error: '+err));
}
connect();

//get all Posts

async function getAllPosts(req,res) {
   try {
    const result = await Post.find();
    if (!result) {
        res.json({message: "No posts found  "})
    } else {
        res.json(result);
    }
   } catch (error) {
     res.json({message : "Error getting Posts " })
   }
}


// get post by title 

async function getPostByTitle(req,res) {
    try {
        const title = req.params.title;
        if (!title) {
            res.json({message : "Title does not exist " });
        } else {
            const result = await Post.find({title:title});
            if (!result) {
                res.json({message : "Post does not exist " });
            }
            res.json(result);
        }
    } catch (error) {
        res.json({message : "Error getting the post  " });
    }
}

//add a new post 
async function addPost(req,res) {
    try {
        let post = req.body;
        if ( !post.title || !post.content) {
            res.status(403).json({
                message: "Need to fill all required fields"
            });
            return;
        }
        const post1 = await Post.find({title : post.title, content : post.content})
        if (!post1) {
            res.status(402).json({
                message: "this post already exists "
            });
            return;
        }
        const result = await Post.create(post);
        if (!result) {
            res.status(402).json({
                message: "Error not added "
            });
        } else {
            res.status(201).json({
                message: "Post added successfully "
            });
        }
        
    } catch (error) {
        res.status(201).json({
            message: "Error creating the post "
        });
    }
    
}

//update a post 
async function updatePost(req,res) {
    try {
        const id= req.params.id;
        const p = req.body;
        if (!id) {
            res.status(404).json({message:'id required'});
        }
        if (!p) {
            res.status(401).json({message:'please provide us with the new data to update'});
        }
        const result = await Post.findOneAndUpdate({_id:id},p);
        if(!result){
            res.status(400).json({message:'Post not found'});
        } 
        res.status(200).json({message:'post updated successfully'});
    } catch (error) {
        res.json({message:'Error couldnt update a post '});
    }
    
}
//delete a post 
async function deletePost(req,res) {
    try {
        const id =req.params.id;
        if (!id) {
            res.status(404).json({message:'id required'});
        }
        const result = await Post.deleteOne({_id : id});
        if (result.deletedCount==0) {
            res.status(404).json({message:'no post Found'});
        } else {
            res.status(200).json({message:'deleted successfully'});
        }
    } catch (error) {
        res.status(404).json({message:'Erreur deleting '});
    }
    
}

//export modules 

module.exports = {
    getAllPosts,
    getPostByTitle,
    addPost,
    updatePost,
    deletePost
};