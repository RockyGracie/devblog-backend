const db = require('../../database/index');

class PostRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT *
      FROM posts
      ORDER BY title ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM posts WHERE id = $1', [id]);

    return row;
  }

  async create({
    title, author, body, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO posts(title, author, body, category_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [
      title[0].toUpperCase() + title.slice(1).toLowerCase(),
      author[0].toUpperCase() + author.slice(1).toLowerCase(),
      body[0].toUpperCase() + body.slice(1).toLowerCase(),
      category_id,
    ]);

    return row;
  }

  async updateById(id, {
    title, author, body, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE posts
      SET title = $1, author = $2, body = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [
      title[0].toUpperCase() + title.slice(1).toLowerCase(),
      author[0].toUpperCase() + author.slice(1).toLowerCase(),
      body[0].toUpperCase() + body.slice(1).toLowerCase(),
      category_id,
      id,
    ]);

    return row;
  }

  async deleteById(id) {
    const deleteOp = await db.query('DELETE FROM posts WHERE id = $1', [id]);

    return deleteOp;
  }
}

module.exports = new PostRepository();
