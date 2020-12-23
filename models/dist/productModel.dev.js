"use strict";

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var schema = new Schema({
  name: {
    type: String
  },
  previewUrl: {
    type: String
  }
});
module.exports = model('products', schema);