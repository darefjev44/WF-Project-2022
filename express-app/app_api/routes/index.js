const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlAuth = require('../controllers/authentication');
const ctrlAccounts = require('../controllers/accounts');

//admin
router
  .route('/admin')
  .get(ctrlMain.admin)

//auth
router.post('/login', ctrlAuth.login);
router.post('/register', ctrlAuth.register);

//get account details in token
router.get('/account/:token', ctrlAccounts.account);
router.get('/transactions/:token', ctrlAccounts.transactions);

module.exports = router;