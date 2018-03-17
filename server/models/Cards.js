const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  rank: { type: String, default: '' },
  suit: { type: String, default: '' }
});

mongoose.model('cards', cardSchema);
