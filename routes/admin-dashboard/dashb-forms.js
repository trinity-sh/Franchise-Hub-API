const express = require('express');
const router = express.Router();

// init. router
router.use('/forms/franchisor-registration', require('./form-franchisor-registration'));
router.use('/forms/newsletter-subscribers', require('./form-newsletter-subscribers'));
router.use('/forms/free-advice', require('./form-free-advice'));

module.exports = router;