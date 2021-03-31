const { Router } = require('express');

const PostController = require('./app/controllers/PostController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.get('/posts', PostController.index);
router.get('/posts/:id', PostController.show);
router.post('/posts', PostController.store);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.delete);

router.get('/posts', CategoryController.index);
router.get('/posts/:id', CategoryController.show);
router.post('/posts', CategoryController.store);
router.put('/posts/:id', CategoryController.update);
router.delete('/posts/:id', CategoryController.delete);

module.exports = router;
