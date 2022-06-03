const express = require('express');
const router = express.Router();

// init. router
router.use('/web', require('./admin-dashboard/dashb-web'));
router.use('/forms', require('./admin-dashboard/dashb-forms'));
router.use('/profile', require('./admin-dashboard/admin-profile'));

module.exports = router;