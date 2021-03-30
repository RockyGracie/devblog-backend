const { Router } = require('express');
const PostController = require('./app/controllers/PostController');

const router = Router();

router.get('/posts', PostController.index);

module.exports = router;
