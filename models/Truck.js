const mongoose = require('mongoose');
const { Schema } = mongoose;

/*
Originally when I created this model, I had a property for flavors which was going
to read an array of another model 'IceCream'.  However, due to deciding that I would
not have a data source that could determine the flavors of interest, I decided
to hard code in properties that reflect four different flavors as listed below.
*/
const truckSchema = new Schema({
  truckNumber: Number,
  location: String,
  strawberry: { type: Number, default: 100 },
  chocolate: { type: Number, default: 100 },
  vanilla: { type: Number, default: 100 },
  mintChip: { type: Number, default: 100 }
});

mongoose.model('trucks', truckSchema);
