const mongoose = require('mongoose')

const newsSubsSchema = new mongoose.Schema({
        metadata: {
                is_read: {
                        type: Boolean,
                        default: false
                }
        },
        content: {
                email: {
                        type: String 
                }
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('newsSubs', newsSubsSchema, 'newsletter-subscribers');