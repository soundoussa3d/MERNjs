const postController = require('../controllers/postControllers');
const express = require('express');
const router = express.Router();
//read
router.get('/',postController.getAllPosts);

router.get('/:title',postController.getPostByTitle);
//create
router.post('/',postController.addPost);
//update
router.put('/:id',postController.updatePost);
//delete
router.delete('/:id',postController.deletePost);

module.exports = router;