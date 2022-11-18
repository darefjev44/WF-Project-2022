const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlAuth = require('../controllers/authentication');


//home
router
  .route('/home/:accountid')
  .get(ctrlMain.home)

//admin
router
  .route('/admin')
  .get(ctrlMain.admin)
  .post(ctrlMain.adminRegister)

//auth
router.post('/login', ctrlAuth.login);

module.exports = router;