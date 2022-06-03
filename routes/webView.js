const express = require('express');
const router = express.Router();

// init. router
router.use('/forms/franchisor-registration', require('./webview/form-franchisor-registration'));
router.use('/section/top-franchise-opportunities', require('./webview/section-top-franc-opp'));
router.use('/forms/newsletter-subscribers', require('./webview/form-newsletter-subscribers'));
router.use('/section/listed-franchises', require('./webview/section-listed-franchises'));
router.use('/section/trending-videos', require('./webview/section-trending-videos'));
router.use('/section/events', require('./webview/form-free-advice'));
router.use('/forms/free-advice', require('./webview/free-advice'));
router.use('/section/filter', require('./webview/section-filter'));

module.exports = router;