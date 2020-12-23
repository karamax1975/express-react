"use strict";

var express = require('express');

var config = require('config');

var mongoose = require('mongoose');

var fileUpload = require('express-fileupload');

var SERVER_PORT = process.env.SERVER_PORT;
var MONGOURL = config.get('mongoURL');

var Product = require('./routes/product');

var app = express();
app.use(express["static"]('public'));
app.use(fileUpload());
app.use(Product);
app.use('/api/auth', require('./routes/auth.routes'));

function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(MONGOURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
          }));

        case 3:
          app.listen(SERVER_PORT, function () {
            console.log("the App is running on ".concat(SERVER_PORT, " port"));
          });
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log('Server Error', _context.t0.message);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

start();