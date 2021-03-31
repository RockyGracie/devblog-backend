const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoryRepository.findAll(orderBy);

    if (categories.length === 0) return response.status(400).json({ no_category: 'There is no category to show. Add one.' });

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoryRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found.' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) return response.status(400).json({ error: 'Name is required' });

    const newCategory = await CategoryRepository.create({ name });

    response.json(newCategory);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) return response.status(404).json({ error: 'Category not found.' });

    if (!name) return response.status(400).json({ error: 'Name is required' });

    const updatedCategory = await CategoryRepository.updateById(id, { name });

    response.json(updatedCategory);
  }

  async delete(request, response) {
    const { id } = request.params;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) return response.status(404).json({ error: 'Category not found.' });

    await CategoryRepository.deleteById(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
