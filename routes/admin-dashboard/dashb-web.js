const express = require('express');
const router = express.Router();

// init. router
router.use('/events', require('./web-events'));
router.use('/trending-videos', require('./web-trending-videos'));

module.exports = router;