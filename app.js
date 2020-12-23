const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const SERVER_PORT = process.env.SERVER_PORT
const MONGOURL = config.get('mongoURL');
const Product = require('./routes/product')
const app = express();

app.use(express.static('public'));
app.use(fileUpload());
app.use(Product)
app.use('/api/auth', require('./routes/auth.routes'));

async function start() {
  try {
    await mongoose.connect(MONGOURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(SERVER_PORT, () => {
      console.log(`the App is running on ${SERVER_PORT} port`);
    })
  } catch (e) {
    console.log('Server Error', e.message);
  }
}

start()
