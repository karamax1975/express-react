const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String
  },
  previewUrl: {
    type: String
  }
});

module.exports = model('products', schema)