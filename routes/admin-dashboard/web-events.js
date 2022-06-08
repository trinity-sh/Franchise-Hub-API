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

router.get('/:page', async (req, res) => {
        try {
                const payload = await events.find({ })
                        .sort({ "content.event_title": 1 })
                        .limit(req.query.quantity || 10)      // quantity is the objects returned per page
                        .skip((req.query.quantity || 10) * (req.params.page - 1));

                return res.json({
                        success: true,
                        payload: payload
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

router.post('/new', async (req, res) => {
        try {
                const ev = new events(req.body);
                try {
                        await ev.save();
                } catch (e) {
                        return res.json({
                                success: false,
                                message: "Form error: " + e
                        });
                }
                
                return res.json({
                        success: true,
                        message: "Event added successfully"
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

router.delete('/:objectId', async (req, res) => {
        try {
                await ev.findByIdAndRemove(req.params.objectId);

                return res.json({
                        success: true,
                        message: "Object has been deleted successfully"
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

module.exports = router;