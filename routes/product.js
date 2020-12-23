const { Router } = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var multer = require('multer')
const productModel = require('../models/productModel');
const router = Router();
const jsonParser = bodyParser.json()

router.post('/api/product/addProduct', jsonParser, async (req, res) => {
  let rezultFile = await function (err) {
    if (err) {
      console.log(err)
      return false
    }

    else {
      return true
    }

  }
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  try {
    console.log(req.body.name);
    const { name } = req.body.name;
    req.files.photo.mv(`${__dirname}/../public/${req.files.photo.name}`, rezultFile);
    productModel.create({
      name: req.body.name,
      previewUrl: req.files.photo.name
    })
    // res.send(200);
    if (rezultFile())
      res.send(200);
  } catch (e) {
    console.log(e.message);
  }

})


router.post('/api/product/delProduct', jsonParser, async (req, res) => {
  try {
    const { id } = req.body
    const rezult = await productModel.findOneAndDelete({ _id: id });
    res.send(true)
  } catch (e) {
    console.log(e.message);
  }
})
router.get('/api/product/getList', jsonParser, async (req, res) => {
  try {
    const products = await productModel.find({});
    res.send({ products });
  } catch (e) {
    console.log(e.message);
  }

})

router.post('/api/product/upload', async (req, res) => {
  let z = await function (err) {
    if (err) {
      console.log(err)
      return false
    }

    else {
      return true
    }

  }

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  req.files.photo.mv(`${__dirname}/../uploads/${req.files.photo.name}`, z);
  if (z()) res.send('OK');
  // console.log(z());
})



module.exports = router;