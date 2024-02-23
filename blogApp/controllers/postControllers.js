//import the model Post
const Post = require('../models/post');
//sanitization
const {body, validationResult } = require('express-validator');

//jwt 
const jwt = require('jsonwebtoken');


// Middleware to sanitize user input
const sanitizeInputs = [
    body('id').trim().escape().isNumeric(),
    body('title').trim().escape(),
    body('title').trim().escape(),
  ];
//get all Posts

function allPosts(req,res) {
    res.json(Post.getAllPosts())
}


// get post by id 
function postbyId(req,res) {
    const id = parseInt(req.params.id);
    res.json(Post.getById(id));
}

//add a new post 
function addPost(req,res) {
    let post = req.body;
    if (!post.id || !post.title || !post.content) {
        res.status(403).json({
            message: "need to fill all required fields"
        });
        return;
    }
    let posts= Post.getAllPosts();
    let p=posts.find(po=>po.id==post.id);
    if (p) {
        res.status(402).json({
            message: "this id is already in use "
        });
        return;
    }
    Post.createPost(post);
    res.status(201).json(posts);
}

//update a post 
function updateP(req,res) {
    const id= parseInt(req.params.id);
    const p = req.body;
    res.send(req.body);
    if (!id) {
        res.status(404).json({message:'id required'});
    }
    if (!p) {
        res.status(401).json({message:'please provide us with the new data to update'});
    }
    //let posts= Post.getAllPosts();
    
    res.status(200).json(Post.updatePost(p,id));
}
//delete a post 
function removePo(req,res) {
    const id =parseInt(req.params.id);
    if (!id) {
        res.status(404).json({message:'id required'});
    }
    Post.removePost(id);
    let posts= Post.getAllPosts();
    res.status(200).json(posts);
}

//export modules 

module.exports = {
    allPosts,
    addPost,
    postbyId,
    updateP,
    removePo
};