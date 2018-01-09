const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/Truck');

// Aware this is bad practice, but I did it this way for activity convenience
mongoose
  .connect('mongodb://draper:draperlab@ds247587.mlab.com:47587/icecream',
  { useMongoClient: true }
);

const app = express();

app.use(bodyParser.json());

// Have express serve client side assets
app.use(express.static('client/build'));

// Serve index.html file if route is not recognized by Express
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

require('./routes/truckRoutes')(app);

app.listen(5000, () => console.log('Listening on Port 5000'));
