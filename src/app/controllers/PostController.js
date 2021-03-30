const PostRepository = require('../repositories/PostRepository');

class PostController {
  async index(request, response) {
    const posts = await PostRepository.findAll();

    response.json(posts);
  }

  async show(request, response) {
    const { id } = request.params;
    const post = await PostRepository.findById(id);

    if (!post) {
      return response.status(400).json({ error: 'Post not found.' });
    }

    response.json(post);
  }
}

module.exports = new PostController();
