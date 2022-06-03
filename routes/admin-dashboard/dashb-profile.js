const express = require('express');
const router = express.Router();

// init. router
router.use('/profile', require('./dashb-profile'));

module.exports = router;