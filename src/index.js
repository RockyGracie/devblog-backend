const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('express-async-errors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  response.sendStatus(500);
});

app.listen(5000, () => console.log('Server started at localhost:5000'));
