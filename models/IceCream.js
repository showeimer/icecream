const mongoose = require('mongoose');
const { Schema } = mongoose;

const iceCreamSchema = new Schema({
  type: String,
  stock: { type: Number, default: 100 }
});

module.exports = iceCreamSchema;
