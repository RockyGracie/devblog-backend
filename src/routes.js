const { Router } = require('express');
const PostController = require('./app/controllers/PostController');

const router = Router();

router.get('/posts', PostController.index);
router.get('/posts/:id', PostController.show);
router.post('/posts', PostController.store);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.delete);

module.exports = router;
