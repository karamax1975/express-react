"use strict";

var _require = require('express'),
    Router = _require.Router;

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var multer = require('multer');

var productModel = require('../models/productModel');

var router = Router();
var jsonParser = bodyParser.json();
router.post('/api/product/addProduct', jsonParser, function _callee(req, res) {
  var rezultFile, name;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(function (err) {
            if (err) {
              console.log(err);
              return false;
            } else {
              return true;
            }
          });

        case 2:
          rezultFile = _context.sent;

          if (!(!req.files || Object.keys(req.files).length === 0)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(400).send('No files were uploaded.'));

        case 5:
          try {
            console.log(req.body.name);
            name = req.body.name.name;
            req.files.photo.mv("".concat(__dirname, "/../public/").concat(req.files.photo.name), rezultFile);
            productModel.create({
              name: req.body.name,
              previewUrl: req.files.photo.name
            }); // res.send(200);

            if (rezultFile()) res.send(200);
          } catch (e) {
            console.log(e.message);
          }

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/api/product/delProduct', jsonParser, function _callee2(req, res) {
  var id, rezult;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.body.id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(productModel.findOneAndDelete({
            _id: id
          }));

        case 4:
          rezult = _context2.sent;
          res.send(true);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0.message);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.get('/api/product/getList', jsonParser, function _callee3(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(productModel.find({}));

        case 3:
          products = _context3.sent;
          res.send({
            products: products
          });
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post('/api/product/upload', function _callee4(req, res) {
  var z;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(function (err) {
            if (err) {
              console.log(err);
              return false;
            } else {
              return true;
            }
          });

        case 2:
          z = _context4.sent;

          if (!(!req.files || Object.keys(req.files).length === 0)) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt("return", res.status(400).send('No files were uploaded.'));

        case 5:
          req.files.photo.mv("".concat(__dirname, "/../uploads/").concat(req.files.photo.name), z);
          if (z()) res.send('OK'); // console.log(z());

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
});
module.exports = router;