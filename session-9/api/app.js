const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();
const todos = {};

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Hello world');
});

app.get('/api/todos', (req, res, next) => {
  res.send(Object.keys(todos).map(x => todos[x]));
});

app.put('/api/todos/:id', (req, res, next) => {
  const id   = parseInt(req.params.id);
  const text = req.body.text;
  const done = req.body.done;

  todos[id] = { id, text, done };

  res.send(todos[id]);
});

app.post('/api/todos', (req, res, next) => {
  const text = req.body.text;
  const id = Object.keys(todos).length + 1;

  todos[id] = { id, text, done: false };

  res.send(todos[id]);
});

app.delete('/api/todos/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  delete todos[id];

  res.status(200).send();
});

app.listen(3000, (err) => {
  console.log('App listening on localhost:3000');
});
