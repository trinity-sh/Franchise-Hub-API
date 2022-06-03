const mongoose = require('mongoose')

const newsSubsSchema = new mongoose.Schema({
        metadata: {
                is_read: {
                        type: Boolean,
                        required: true,
                        default: false
                }
        },
        content: {
                email: {
                        type: String,
                        required: true
                }
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('newsSubs', newsSubsSchema, 'newsletter-subscribers');