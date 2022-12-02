const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');

/* Pages */
router.get('/', ctrlMain.home);

/* Login */
router
  .route('/login')
  .get(ctrlMain.login)
  .post(ctrlMain.loginSubmit);

/* Admin */
router.get('/admin', ctrlMain.admin);

module.exports = router;