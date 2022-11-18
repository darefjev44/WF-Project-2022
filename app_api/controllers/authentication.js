var passport = require('passport');
var mongoose = require('mongoose');
var Account = mongoose.model('Account');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.login = function(req, res) {
  console.log(req.body)
  if(!req.body.userid || !req.body.pin) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    });
    return;
  }

  passport.authenticate('local', function(err, account, info){
    var token;

    if (err) {
      sendJSONresponse(res, 404, err);
      return;
    }

    if(account){
      token = account.generateJwt();
      sendJSONresponse(res, 200, {
        "token" : token
      });
    } else {
      sendJSONresponse(res, 401, info);
    }
  })(req, res);

};