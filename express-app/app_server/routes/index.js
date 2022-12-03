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

/* Admin */
router.get('/admin', ctrlMain.admin);

/* Logout */
router.get('/logout', ctrlMain.logout);

module.exports = router;