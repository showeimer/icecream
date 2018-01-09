const express = require('express');

mongoose.connect('mongodb://draper:draperlab@ds247587.mlab.com:47587/icecream');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => console.log('Listening on Port 3000'));
