require('dotenv').config('../.env')
const admtoken = require('../schemas/admin-access-token');

module.exports = async (req, res, next) => {
        try {
                if (req.headers.authorization) {
                        const adminUser = await admtoken.findOne({
                                access_token: req.headers.authorization.split(' ')[1]
                        });
                
                        if (null != adminUser) {
                                req.IS_TOKEN_VALID = 1;
                                if (adminUser.expire_at - Date.now() <= process.env.JWT_ACCESS_WINDOW_INCREMENT) {
                                        adminUser.expire_at += parseInt(process.env.JWT_ACCESS_WINDOW_INCREMENT);
                                        adminUser.save();
                                }
                        }
                        else
                                req.IS_TOKEN_VALID = 0;
                }
                else
                        req.IS_TOKEN_VALID = 0;
                
                if (!req.IS_TOKEN_VALID)
                        return res.json({
                                success: false,
                                message: "Invalid credential(s): You are not authorised"
                        });
                
                next();
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
};