const mongoose = require('mongoose')

const newsSubsSchema = new mongoose.Schema({
        is_read: {
                type: Boolean,
                required: true,
                default: false
        },
        email: {
                type: String,
                required: true
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('newsSubs', newsSubsSchema, 'newsletter-subscribers');