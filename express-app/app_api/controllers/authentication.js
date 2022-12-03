var passport = require('passport');
var mongoose = require('mongoose');
var Account = mongoose.model('Account');
var jwt = require('jsonwebtoken');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

//function to get next available user id
async function getNextUserid(){
  var accounts = await Account.find().sort({userid:-1}).limit(1).exec();
  return accounts[0].userid+1; 
}
  

module.exports.register = function(req, res) {
  if(!req.body.firstName || !req.body.lastName || !req.body.address || !req.body.town || !req.body.county || !req.body.eircode) {
    sendJSONresponse(res, 400, {
      "message": "All fields are required."
    });
    return;
  }

  var account = new Account();

  //query to get next available user id then do rest when getNextUserid returns
  getNextUserid().then(result => {
    account.userid = result;
    account.firstName = req.body.firstName;
    account.lastName = req.body.lastName;
    account.address = req.body.address;
    account.town = req.body.town;
    account.county = req.body.county;
    account.eircode = req.body.eircode;

    account.save(function(err) {
      var token;
      if(err) {
        console.log(err)
        sendJSONresponse(res, 404, err);
      } else {
        token = account.generateJwt();
        sendJSONresponse(res, 200, {
          "token" : token
        });
      }
    });
  });
};

module.exports.login = function(req, res) {
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