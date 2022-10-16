const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');

/* Pages */
router.get('/', ctrlMain.home);
router.get('/login', ctrlMain.login);
router.get('/register', ctrlMain.register);

module.exports = router;