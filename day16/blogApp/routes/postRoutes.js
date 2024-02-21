const postController = require('../controllers/postControllers');
const express = require('express');
const router = express.Router();

router.get('/',postController.allPosts);

router.get('/:id',postController.postbyId);

router.post('/',postController.addPost);

router.put('/:id',postController.updateP);

module.exports = router;