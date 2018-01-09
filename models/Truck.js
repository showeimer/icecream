const mongoose = require('mongoose');
const { Schema } = mongoose;
const IceCreamSchema = require('./IceCream');

const truckSchema = new Schema({
  truckNumber: Number,
  location: String,
  flavors: [IceCreamSchema]
});

mongoose.model('trucks', truckSchema);
