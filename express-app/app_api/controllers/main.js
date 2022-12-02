const mongoose = require('mongoose');
const Account = mongoose.model('Account');

const admin = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};

const adminRegister = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};
    
module.exports = {
  admin,
  adminRegister
};