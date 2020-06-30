const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const phones = require('./api/phones.json');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.json({ test: 'server is running' });
});

app.get('/phones', function(req, res) {
  res.json({ phones });
});

app.listen(3001, function() {
  console.log('The server has been initialazed: http://localhost:3001');
});
