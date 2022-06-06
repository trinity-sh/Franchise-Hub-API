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

router.post('/new', async (req, res) => {
        try {
                const newsdoc = new news(req.body);
                try {
                        await newsdoc.save();
                } catch (e) {
                        return res.json({
                                success: false,
                                message: "Form error: " + e
                        });
                }
                
                return res.json({
                        success: true,
                        message: "Form saved successfully"
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

module.exports = router;