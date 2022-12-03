var jwt = require('jsonwebtoken');

module.exports.auth = function(req, res, next) {
  var token = req.cookies.token;

  jwt.verify(token, process.env.JWT_SECRET, function(err) {
    if(err) {
      res.redirect('/login');
    } else {
      next();
    }
  });
};