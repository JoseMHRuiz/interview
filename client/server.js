const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const phones = require('./api/phones.json');

// Middleware Setup
let whitelist = ['http://localhost:3000', 'http://localhost:3080'];
let corsOptions = {
  origin: function(origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

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
