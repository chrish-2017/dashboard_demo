/**
 * Created by ling.zou on 2018/4/19.
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('db open successful!');
});

module.exports = db;
