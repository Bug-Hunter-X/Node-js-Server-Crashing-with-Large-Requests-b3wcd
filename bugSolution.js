const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json({ limit: '50mb' })); // Adjust limit as needed
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('OK');
});

app.listen(3000);