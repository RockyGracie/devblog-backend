const { v4 } = require('uuid');

const db = require('../../database/index');

// let posts = [
//   {
//     id: v4(),
//     title: 'Livros e Flores',
//     author: 'De Assis',
//     body: `Teus olhos são meus livros.
//     Que livro há aí melhor,
//     Em que melhor se leia
//     A página do amor?

//     Flores me são teus lábios.
//     Onde há mais bela flor,
//     Em que melhor se beba
//     O bálsamo do amor?`,
//   },
//   {
//     id: v4(),
//     title: 'Frase Graciliano',
//     author: 'Graça',
//     body: `Quem escreve deve ter todo o cuidado para a coisa não sair molhada.
//       Da página que foi escrita não deve pingar nenhuma palavra, a não ser as desnecessárias.
//       É como pano lavado que se estira no varal.`,
//   },
//   {
//     id: v4(),
//     title: 'Frase James Joyce',
//     author: 'Joyce',
//     body: `Fizeste que eu confessasse os pavores que tenho.
//       Mas vou te dizer também o que não me apavora.
//       Não tenho medo de estar sozinho, de ser desdenhado por quem quer que seja,
//       nem de deixar seja lá o que for que eu tenha que deixar.
//       E não tenho medo, tampouco, de cometer um erro,
//       um erro que dure toda a vida e talvez tanto quanto a própria eternidade mesma.`,
//   },
// ];

class PostRepository {
  findAll() {
    return new Promise((resolve) => resolve(posts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(posts.find((post) => post.id === id)));
  }

  async create({
    title, author, body, category_id,
  }) {
    const result = await db.query(`
      INSERT INTO posts(title, author, body, category_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [title, author, body, category_id]);

    return result;
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

  deleteById(id) {
    return new Promise((resolve) => {
      posts = posts.filter((post) => post.id !== id);

      resolve(posts);
    });
  }
}

module.exports = new PostRepository();
