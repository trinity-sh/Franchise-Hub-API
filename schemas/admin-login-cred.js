const mongoose = require('mongoose');

const admcredSchema = new mongoose.Schema({
        _id: {
                type: String
        },
        password: {
                type: String
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('admcred', admcredSchema, 'admin-login-cred');