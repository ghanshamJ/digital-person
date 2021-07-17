let mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
let personSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  email: String,
  address: String,
  country: String
});
module.exports = mongoose.model('Person', personSchema,"persons")