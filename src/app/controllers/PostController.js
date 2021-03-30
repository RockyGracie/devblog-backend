const PostRepository = require('../repositories/PostRepository');

class PostController {
  async index(request, response) {
    const posts = await PostRepository.findAll();

    response.json(posts);
  }
}

module.exports = new PostController();
