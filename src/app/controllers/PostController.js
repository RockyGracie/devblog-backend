const PostRepository = require('../repositories/PostRepository');

class PostController {
  async index(request, response) {
    const { orderBy } = request.query;
    const posts = await PostRepository.findAll(orderBy);

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
    const {
      title, author, body, category_id,
    } = request.body;

    if (!title && !author && !body) return response.status(400).json({ error: 'Post author and body are required.' });

    if (!title) return response.status(400).json({ error: 'Post title is required.' });

    if (!author) return response.status(400).json({ error: 'Post author is required.' });

    if (!body) return response.status(400).json({ error: 'Post body is required.' });

    const newPost = await PostRepository.create({
      title, author, body, category_id,
    });

    response.json(newPost);
  }

  async update(request, response) {
    const { id } = request.params;
    const { title, author, body } = request.body;

    const postExists = await PostRepository.findById(id);

    if (!postExists) return response.status(400).json({ error: 'Post not found.' });

    if (!title) return response.status(400).json({ error: 'Post\'s title is required.' });

    if (!author) return response.status(400).json({ error: 'Post\'s author is required.' });

    if (!body) return response.status(400).json({ error: 'Post\'s body is required.' });

    if (!title && !author && !body) return response.status(400).json({ error: 'Must update some value.' });

    const updatedPost = await PostRepository.updateById(id, { title, author, body });

    response.json(updatedPost);
  }

  async delete(request, response) {
    const { id } = request.params;

    const postExists = await PostRepository.findById(id);

    if (!postExists) return response.status(400).json({ error: 'Post not found.' });

    await PostRepository.deleteById(id);

    response.sendStatus(204);
  }
}

module.exports = new PostController();
