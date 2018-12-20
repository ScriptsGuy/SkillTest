const mongoose = require('mongoose');

const { Schema } = mongoose;

const computerAccesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  processor: {
    type: String
  },
  ram: {
    type: String
  },
  diskType: {
    type: String
  },
  screenSize: {
    type: String
  },
  graphicsCard: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  priceState: {
    type: String,
    required: true
  },
  exchange: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
});

const Compacc = mongoose.model('compacc', computerAccesSchema);

module.exports = Compacc;
