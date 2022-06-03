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

router.put('/change-username', async (req, res) => {
        try {
                const adminUser = await admcred.find({
                        _id: req.body._id,
                        password: req.body.password || '~'
                });
                if (adminUser == null)
                        return res.json({
                                success: false,
                                message: "You are not authorised: invalid credential(s)"
                        });
                if (await bcrypt.compare(req.body.password, adminUser.password)) {
                        if (adminUser.username == req.body.username) {
                                return res.json({
                                        success: false,
                                        message: "Invalid New Username: current username and the new requested username are the same"
                                });
                        }
                        
                        adminUser.username = req.body.username;
                        await adminUser.save();
                        
                        return res.json({
                                success: true,
                                message: "Username has been changed successfully"
                        });
                }
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

router.put('/change-password', async (req, res) => {
        try {
                const adminUser = await admcred.find({
                        _id: req.body._id,
                        password: req.body.password || '~'
                });
                if (adminUser == null)
                        return res.json({
                                success: false,
                                message: "You are not authorised: invalid credential(s)"
                        });
                if (await bcrypt.compare(req.body.password, adminUser.password)) {
                        if (adminUser.username == req.body.username) {
                                return res.json({
                                        success: false,
                                        message: "Invalid New Password: current password and the new requested username are the same"
                                });
                        }
                        
                        adminUser.password = req.body.password;
                        await adminUser.save();
                        
                        return res.json({
                                success: true,
                                message: "Password has been changed successfully"
                        });
                }
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

module.exports = router;