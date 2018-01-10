const mongoose = require('mongoose');
const Runner = mongoose.model('runners');

module.exports = app => {

  // CREATE ENDPOINTS ============================================

  // Create a new runner
  app.post('/api/runners', async (req, res) => {
    const { runnerNumber, location } = req.body;
    const runner = new Runner({
      truckNumber,
      location,
    });

    try {
      await runner.save();
      res.send(runner);
    } catch (err) {
      res.status(422).send(err);
    }
  });


  // READ ENDPOINTS ================================================

  // Read all trucks in database
  app.get('/api/runners', async (req, res) => {
    const runners = await Runner.find({});
    res.send(runners);
  });

  // Read a specific truck in database
  app.get('/api/runners/:runnerID', async (req, res) => {
    const runner = await Runner.findById(req.params.runnerID);
    res.send(runner);
  });


  // UPDATE ENDPOINTS ================================================


  // DELETE ENDPOINTS ============================================

  app.delete('/api/runners/:runnerID', async (req, res) => {
    try {
      await Runner.findByIdAndRemove(req.params.runnerID);
      res.send(`Successfully removed ${req.params.runnerID}`);
    } catch (err) {
      res.status(404).send(err);
    }
  });

}
