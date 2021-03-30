const { v4 } = require('uuid');

let posts = [
  {
    id: v4(),
    title: 'lalala',
    author: 'De Assis',
    body: 'Querida, ao pé do leito derradeiro...',
  },
  {
    id: v4(),
    title: 'lalala2',
    author: 'Graça',
    body: 'Comovo-me em excesso, por natureza e por ofício. Acho medonho alguém viver sem paixões.',
  },
  {
    id: v4(),
    title: 'lalala3',
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

  create({ title, author, body }) {
    return new Promise((resolve) => {
      const newPost = {
        id: v4(),
        title: title[0].toUpperCase() + title.slice(1).toLowerCase(),
        author: author[0].toUpperCase() + author.slice(1).toLowerCase(),
        body: body[0].toUpperCase() + body.slice(1),
      };

      posts.push(newPost);
      resolve(newPost);
    });
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
