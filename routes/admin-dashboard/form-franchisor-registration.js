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
router.use(require('../../middlewares/isAdminThenSlideWindow'));

router.get('/all/:page', async (req, res) => {
        try {
                const payload = await fregn.find({ })
                        .sort({ "content.business_title": 1 })
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

router.get('/read/:page', async (req, res) => {
        try {
                const payload = await fregn.find(
                        { 
                                "metadata.is_read": true
                        }, {
                                "content.business_title": 1,
                                "content.business_details": 1,
                                "content.business_logo": 1,
                                "metadata.business_category": 1
                        })
                        .sort({ "content.business_title": 1 })
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

router.get('/unread/:page', async (req, res) => {
        try {
                const payload = await fregn.find(
                        { 
                                "metadata.is_read": false
                        }, {
                                "content.business_title": 1,
                                "content.business_details": 1,
                                "content.business_logo": 1,
                                "metadata.business_category": 1
                        })
                        .sort({ "content.business_title": 1 })
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

router.put('/update/:objectId', async (req, res) => {
        try {
                await fregn.findByIdAndUpdate(req.params.objectId, req.body);

                return res.json({
                        success: true,
                        message: "Application has been submitted successfully"
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

router.put('/mark-read/:objectId', async (req, res) => {
        try {
                await fregn.findByIdAndUpdate(req.params.objectId, { "metadata.is_read": true });

                return res.json({
                        success: true,
                        message: "Object has been marked read"
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

router.put('/mark-unread/:objectId', async (req, res) => {
        try {
                await fregn.findByIdAndUpdate(req.params.objectId, { "metadata.is_read": false });

                return res.json({
                        success: true,
                        message: "Object has been marked unread"
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

router.put('/enable-listing/:objectId', async (req, res) => {
        try {
                await fregn.findByIdAndUpdate(req.params.objectId, { "metadata.is_listed": true });

                return res.json({
                        success: true,
                        message: "Object has been listed on web"
                });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

router.put('/disable-listing/:objectId', async (req, res) => {
        try {
                await fregn.findByIdAndUpdate(req.params.objectId, { "metadata.is_listed": false });

                return res.json({
                        success: true,
                        message: "Object has been unlisted from web"
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
                await fregn.findByIdAndRemove(req.params.objectId);

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

router.post('/new', async (req, res) => {
        try {
                const fregndoc = new fregn(req.body);
                try {
                        await fregndoc.save();
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