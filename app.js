const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/Truck');
require('./models/Runner');

// Aware this is bad practice, but I did it this way for activity convenience
mongoose
  .connect('mongodb://draper:draperlab@ds247587.mlab.com:47587/icecream',
  { useMongoClient: true }
);

const app = express();

app.use(bodyParser.json());

require('./routes/truckRoutes')(app);
require('./routes/runnerRoutes')(app);

app.listen(5000, () => console.log('Listening on Port 5000'));
