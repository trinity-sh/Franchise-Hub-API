const express = require('express');
const jwt  = require('jsonwebtoken');
const bcrypt  = require('bcrypt');
const cors = require("cors");

const admcred = require('./schemas/admin-login-cred');
const admtoken = require('./schemas/admin-access-token');
const sweeptoken = require('./cronjobs/tokenSweep');
const dashboard = require('./routes/adminDashboard');
const webview = require('./routes/webView');

require('dotenv').config();

// init. express, mongoose, cronjob
const app = express();
require('./mdb').connectdb();
sweeptoken.start();

// init. middleware
app.use(express.json());
app.use(cors({
        origin: `http://localhost:${process.env.REACT_DEV_SERVER_PORT}`,
        credentials: true,
}));

app.use('/api/v1/admin/dashboard'/* , require('./middlewares/isAdminThenSlideWindow') */, dashboard);
app.use('/api/v1/webview', webview);
const isAdmin = require('./middlewares/isAdmin');

// Hello World!
app.get('/', async (req, res) => {
	return res.send('This is the Franchise Hub express server!');
});

// admin login
app.post('/api/v1/admin/login', isAdmin, async (req, res) => {
        try {
                if (req.IS_TOKEN_VALID)
                        return res.json({
                                success: true,
                                message: "You are already authorised"
                        });

                const adminUser = await admcred.findById(req.body.username);
                
                if (adminUser == null)
                        return res.json({
                                success: false,
                                message: "Invalid credential(s)"
                        });
                
                (async () => {
                        if (await bcrypt.compare(req.body.password, adminUser.password)) {
                                const token = jwt.sign({ username: req.body.username }, process.env.JWT_ACCESS_SECRET);
                                await admtoken.create({
                                        access_token: token,
                                        expires_at: Date.now() + process.env.JWT_ACCESS_WINDOW
                                });

                                return res.json({
                                        success: true,
                                        message: "Admin authorised",
                                        access_token: token
                                });
                        }
                        else
                                return res.status(403).json({
                                        success: false,
                                        message: "Invalid credential(s)"
                                });
                })();
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

app.post('api/v1/admin/logout', isAdmin, async (req, res) => {
        try {
                if (req.IS_TOKEN_VALID) {
                        await admtoken.deleteOne({
                                access_token: req.headers.authorization.split(' ')[1]
                        });
                        return res.json({
                                success: true,
                                message: "Session Expired: You have been logged out of administrative panel"
                        });
                }
                else
                        return res.json({
                                success: false,
                                message: "Invalid Credential(s): You don't have administrative access to log out of"
                        });
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});
 
app.listen(
        process.env.PORT || 3000,
        () => console.log(`Listening on PORT ${process.env.PORT}...`)
);
