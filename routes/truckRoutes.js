const mongoose = require('mongoose');
const Truck = mongoose.model('trucks');

module.exports = app => {

  app.get('/api/trucks', async (req, res) => {
    const trucks = await Truck.find({});
    res.send(trucks);
  });

  app.post('/api/trucks', async (req, res) => {
    const { truckNumber, location, flavors } = req.body;
    const truck = new Truck({
      truckNumber,
      location,
      flavors
    });

    try {
      await truck.save();
      res.send(truck);
    } catch (err) {
      res.status(422).send(err);
    }

  });

}
