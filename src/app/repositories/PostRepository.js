const db = require('../../database/index');

class PostRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM posts');

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
    `, [title, author, body, category_id]);

    return row;
  }

  updateById(id, { title, author, body }) {
    return new Promise((resolve) => {
      const updatedPost = {
        id,
        title: title[0].toUpperCase() + title.slice(1).toLowerCase(),
        author: author ? author[0].toUpperCase() + author.slice(1).toLowerCase() : author,
        body: body ? body[0].toUpperCase() + body.slice(1) : body,
      };

      posts = posts.map((post) => (post.id === id ? updatedPost : post));
      resolve(updatedPost);
    });
  }

  async deleteById(id) {
    const deleteOp = await db.query('DELETE FROM posts WHERE id = $1', [id]);

    return deleteOp;
  }
}

module.exports = new PostRepository();
