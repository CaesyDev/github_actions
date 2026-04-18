//build a simple express server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    'name' : 'server',
    'message' : 'Auto deployed'
  })
});

app.post('/api/patient', (req, res) => {
  console.log(req.body);
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});