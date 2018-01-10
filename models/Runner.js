const mongoose = require('mongoose');
const { Schema } = mongoose;

const runnerSchema = new Schema({
  runnerNumber: Number,
  location: { lat: Number, lng: Number }
})

mongoose.model('runners', runnerSchema);
