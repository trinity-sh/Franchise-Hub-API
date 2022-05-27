const mongoose = require('mongoose');

const admcredSchema = new mongoose.Schema({
        _id: {
                type: String,
                required: true
        },
        password: {
                type: String,
                required: true
        }
}, {
        versionKey: false
});

module.exports = mongoose.model('admcred', admcredSchema, 'admin-login-cred');