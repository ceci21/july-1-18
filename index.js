const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

//http://localhost:1717

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('You\'re here!');
});


app.get('/blueberry', (req, res, next) => {
  res.send('Blueberry!');
});

app.post('/apple', (req, res, next) => {
  res.send(req.body.fruit);
})

app.post('/blueberry', (req, res, next) => {
  res.send('blueberry!');
})

app.listen(1717, () => {
  console.log('Running on port 1717...')
});