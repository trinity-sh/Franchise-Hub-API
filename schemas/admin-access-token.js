const mongoose = require('mongoose');
require('dotenv').config('../.env')

const admTokenSchema = new mongoose.Schema({
        access_token: {
                type: String,
                required: true
        },
        expire_in: {
                type: Number,
                default: Date.now() + process.env.JWT_ACCESS_WINDOW
        }
}, {
        versionKey: false
});

module.exports = mongoose.model('admToken', admTokenSchema, 'admin-access-tokens');