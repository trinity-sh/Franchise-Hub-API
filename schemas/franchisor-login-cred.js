const mongoose = require('mongoose');

const fcredSchema = new mongoose.Schema({
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

module.exports = mongoose.model('fcred', fcredSchema, 'franchisor-login-cred');