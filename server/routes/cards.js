const mongoose = require('mongoose');
const Cards = mongoose.model('cards');

module.exports = app => {
  app.get('/api', async (req, res) => {
    const cards = await Cards.find({}).select();
    res.send(cards);
  });
};
