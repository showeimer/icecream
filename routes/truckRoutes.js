const mongoose = require('mongoose');
const Truck = mongoose.model('trucks');

module.exports = app => {

  // CREATE ENDPOINTS ============================================

  // Create a new ice cream truck
  app.post('/api/trucks', async (req, res) => {
    const { truckNumber, location } = req.body;
    const truck = new Truck({
      truckNumber,
      location,
    });

    try {
      await truck.save();
      res.send(truck);
    } catch (err) {
      res.status(422).send(err);
    }
  });


  // READ ENDPOINTS ================================================

  // Read all trucks in database
  app.get('/api/trucks', async (req, res) => {
    const trucks = await Truck.find({});
    res.send(trucks);
  });

  // Read a specific truck in database
  app.get('/api/trucks/:truckID', async (req, res) => {
    const truck = await Truck.findById(req.params.truckID);
    res.send(truck);
  });


  // UPDATE ENDPOINTS ===================================================================

  // Update inventory after a sale
  app.put('/api/trucks/:truckID/sale', async (req, res) => {
    // Parse through the sale, see what ice creams were sold, and how many
    for(let item in req.body) {
      // Find the truck ID, and decrement units sold
      await Truck.updateOne({ _id: req.params.truckID }, { $inc: { [item]: req.body[item] * -1 } })
    }
    const truck = await Truck.findById(req.params.truckID);
    res.send(truck);
  });

  // Update inventory after resupply
  app.put('/api/trucks/:truckID/restock', async (req, res) => {
    for(let item in req.body) {
      await Truck.updateOne({ _id: req.params.truckID }, { $inc: { [item]: req.body[item] } })
    }
    const truck = await Truck.findById(req.params.truckID);
    res.send(truck);
  });

  // Update location of truck
  app.put('/api/trucks/:truckID/relocate', async (req, res) => {
    await Truck.updateOne({ _id: req.params.truckID }, { location: req.body });
    const truck = await Truck.findById(req.params.truckID);
    res.send(truck);
  });


  // DELETE ENDPOINTS ============================================

  // Remove a truck
  app.delete('/api/trucks/:truckID', async (req, res) => {
    try {
      await Truck.findByIdAndRemove(req.params.truckID);
      res.send(`Successfully removed ${req.params.truckID}`);
    } catch (err) {
      res.status(404).send(err);
    }
  });

}
