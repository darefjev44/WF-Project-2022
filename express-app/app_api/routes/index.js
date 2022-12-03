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
router.post('/login', ctrlAuth.login); //Returns token as JSON object.
router.post('/register', ctrlAuth.register); //Creates a new account.

//account details
router.get('/account/:token', ctrlAccounts.account);
router.get('/transactions/:token', ctrlAccounts.transactions);

module.exports = router;