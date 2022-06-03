const express = require('express');
const router = express.Router();

// init. router
router.use('/web/events', require('./web-events'));
router.use('/web/trending-videos', require('./web-trending-videos'));

module.exports = router;