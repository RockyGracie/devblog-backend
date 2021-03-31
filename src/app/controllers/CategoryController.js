const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoryRepository.findAll(orderBy);

    response.json(categories);
  }

  show() {
    
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) return response.status(400).json({ error: 'Name is required' });

    const newCategory = await CategoryRepository.create({ name });

    response.json(newCategory);
  }

  update() {

  }

  delete() {

  }
}

module.exports = new CategoryController();
