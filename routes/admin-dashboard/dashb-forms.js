const express = require('express');
const router = express.Router();

// init. router
router.use('/franchisor-registration', require('./form-franchisor-registration'));
router.use('/newsletter-subscribers', require('./form-newsletter-subscribers'));
router.use('/franchisee-application', require('./form-apply-for-franchisee'));
router.use('/free-advice', require('./form-free-advice'));

module.exports = router;