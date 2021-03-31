const db = require('../../database/index');

class CategoryRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT *
      FROM categories
      ORDER BY name ${direction}
    `);

    return rows;
  }

  findById(id) {

  }

  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name[0].toUpperCase() + name.slice(1).toLowerCase()]);

    return row;
  }

  updateById(id, { name }) {

  }

  deleteById(id) {

  }
}

module.exports = new CategoryRepository();
