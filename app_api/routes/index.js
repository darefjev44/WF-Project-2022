const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');

//home
router
  .route('/')
  .get(ctrlMain.home)

//login
router
  .route('/login')
  .get(ctrlMain.login)
  .post(ctrlMain.loginSubmit)

//admin
router
  .route('/admin')
  .get(ctrlMain.admin)
  .post(ctrlMain.adminRegister)

module.exports = router;