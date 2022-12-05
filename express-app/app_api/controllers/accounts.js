var mongoose = require('mongoose');
var Account = mongoose.model('Account');
var jwt = require('jsonwebtoken');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.account = function(req, res) {
  var decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);

  Account.findById(decoded.account._id, 'firstName lastName IBAN BIC balance', function(err, account) {
    if(err) {
      sendJSONresponse(res, 404, err);
    } else {
      sendJSONresponse(res, 200, account);
    }
  });
};

module.exports.transactions = function(req, res) {
  var decoded = jwt.verify(req.params.token, process.env.JWT_SECRET);

  Account.findById(decoded.account._id, 'transactions', function(err, account) {
    if(err) {
      sendJSONresponse(res, 404, err);
    } else {
      sendJSONresponse(res, 200, account.transactions);
    }
  });
};