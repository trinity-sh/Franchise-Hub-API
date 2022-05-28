const admtoken = require('../schemas/admin-access-token');

module.exports = async (req, res, next) => {
        try {
                console.log("authorz. = " + req.headers.authorization)
                if (req.headers.authorization)
                        (null != (await admtoken.findOne({
                                access_token: req.headers.authorization.split(' ')[1]
                        }))) ? req.IS_TOKEN_VALID = 1 : req.IS_TOKEN_VALID = 0;
                else
                        req.IS_TOKEN_VALID = 0;
                console.log("header = " + req.IS_TOKEN_VALID);
                return next();
        } catch (e) {
                res.status(500).json({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
};