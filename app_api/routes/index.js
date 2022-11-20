const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlAuth = require('../controllers/authentication');

//admin
router
  .route('/admin')
  .get(ctrlMain.admin)

//auth
router.post('/login', ctrlAuth.login);
router.post('/register', ctrlAuth.register);

//get account details in token
router.get('/account/:token', ctrlAuth.account);

module.exports = router;