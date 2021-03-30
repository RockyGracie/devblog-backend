const express = require('express');

const app = express();

app.get('/posts', (request, response) => {
  response.send('Server is working');
});

app.listen(3000, () => console.log('Server started at localhost:3000'));
