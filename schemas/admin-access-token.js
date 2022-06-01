const mongoose = require('mongoose');
require('dotenv').config('../.env')

const admTokenSchema = new mongoose.Schema({
        access_token: {
                type: String,
                required: true
        },
        expire_at: {
                type: Number,
                default: Date.now() + parseInt(process.env.JWT_ACCESS_WINDOW)
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('admToken', admTokenSchema, 'admin-access-tokens');