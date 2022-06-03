const express = require('express');
const router = express.Router();

// init. schemas
const fregn = require('../../schemas/franchisor-registration');
const news = require('../../schemas/newsletter-subscribers');
const admcred = require('../../schemas/admin-login-cred');
const tvid = require('../../schemas/trending-videos');
const fadv = require('../../schemas/free-advice');
const events = require('../../schemas/events');

// init. middlewares
router.use(express.json());

router.get('/all', async (req, res) => {
        try {
                const fregndoc = await fregn.find({
                        "metadata.is_listed": true,
                });
                
                return res.json({
                        success: true,
                        payload:  fregndoc
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

module.exports = router;