/**
 * Created by ling.zou on 2018/4/19.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
});

const user = mongoose.model('user', userSchema);

module.exports = user;
