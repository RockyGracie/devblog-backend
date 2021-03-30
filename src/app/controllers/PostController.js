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

  async store(request, response) {
    const { author, body } = request.body;

    if (!author && !body) return response.status(400).json({ error: 'Post author and body are required.' });

    if (!author) return response.status(400).json({ error: 'Post author is required.' });

    if (!body) return response.status(400).json({ error: 'Post body is required.' });

    const newPost = await PostRepository.create({ author, body });

    response.json(newPost);
  }
}

module.exports = new PostController();
