const postController = require('../controllers/postControllers');
const express = require('express');
const router = express.Router();
//read
router.get('/',postController.allPosts);

router.get('/:id',postController.postbyId);
//create
router.post('/',postController.addPost);
//update
router.put('/:id',postController.updateP);
//delete
router.delete('/:id',postController.removePo);

module.exports = router;