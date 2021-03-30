const { v4 } = require('uuid');

const posts = [
  {
    id: v4(),
    author: 'Assis',
    body: 'lorem ipsum',
  },
  {
    id: v4(),
    author: 'Graça',
    body: 'lorem ipsum',
  },
  {
    id: v4(),
    author: 'Joyce',
    body: 'lorem ipsum',
  },
];

class PostRepository {
}

module.exports = new PostRepository();
