const mongoose = require('mongoose');
const Account = mongoose.model('Account');

const home = function (req, res) {
  if(req.params && req.params.accountid){
    console.log(req.params.accountid)
    Account
      .find({'accountID':req.params.accountid})
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
  admin,
  adminRegister
};