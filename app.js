const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/Truck');

// Aware this is bad practice, but I did it this way for activity convenience
mongoose.connect('mongodb://draper:draperlab@ds247587.mlab.com:47587/icecream');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

require('./routes/truckRoutes')(app);

app.listen(3000, () => console.log('Listening on Port 3000'));
