const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/',blogController.blog_index);
router.get('/create', blogController.blog_create_get);
router.post('/', blogController.blog_create_post);
//get a specific post
router.get('/:id',blogController.blog_details);
router.delete('/:id',blogController.blog_delete);

module.exports = router;


//mvc stands for model,view,controller
//MVC is a way of structuring our code & files.
//Keeps code more modular,reusable & easier to read
//model ---> controller ---> view