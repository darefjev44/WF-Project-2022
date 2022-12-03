const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlAuth = require('../controllers/auth');

/* Pages */
router.get('/', ctrlAuth.auth, ctrlMain.home);

/* Login */
router
  .route('/login')
  .get(ctrlMain.login)
  .post(ctrlMain.loginSubmit);

/* Register */
router
  .route('/register')
  .get(ctrlMain.register)
  .post(ctrlMain.registerSubmit);

/* Logout */
router.get('/logout', ctrlMain.logout);

module.exports = router;