const { v4 } = require('uuid');

const posts = [
  {
    id: v4(),
    author: 'De Assis',
    body: 'Querida, ao pé do leito derradeiro...',
  },
  {
    id: v4(),
    author: 'Graça',
    body: 'Comovo-me em excesso, por natureza e por ofício. Acho medonho alguém viver sem paixões.',
  },
  {
    id: v4(),
    author: 'Joyce',
    body: 'Tudo é incerto neste mundo hediondo, mas não o amor de uma mãe.',
  },
];

class PostRepository {
  findAll() {
    return new Promise((resolve) => resolve(posts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(posts.find((post) => post.id === id)));
  }

  create({ author, body }) {
    return new Promise((resolve) => {
      const newPost = {
        id: v4(),
        author: author[0].toUpperCase() + author.slice(1).toLowerCase(),
        body: body[0].toUpperCase() + body.slice(1),
      };

      posts.push(newPost);
      resolve(newPost);
    });
  }
}

module.exports = new PostRepository();
