const mongoose = require('mongoose');
const Account = mongoose.model('Account');

const home = function (req, res) {
  if(req.params && req.params.accountid){
    Account
      .findById(req.params.accountid)
      .exec((err, account) => {
        if(!account){
          res
            .status(404)
            .json({
              'message': "Account not found"
            });
          return;
        } else if (err) {
          res
            .status(404)
            .json(err);
          return;
        }
        res
          .status(200)
          .json(account);
      });
  } else {
    res
      .status(404)
      .json({
        'message': "No account requested"
      });
  }
};

const login = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};

const loginSubmit = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};


const admin = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};

const adminRegister = function (req, res) {
  res
    .status(200)
    .json({"status" : "success"});};

module.exports = {
  home,
  login,
  loginSubmit,
  admin,
  adminRegister
};