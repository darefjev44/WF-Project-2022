const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');

/* Pages */
router.get('/', ctrlMain.home);

/* Login */
router.get('/login', ctrlMain.login);

/* Admin */
router.get('/admin', ctrlMain.admin);

module.exports = router;