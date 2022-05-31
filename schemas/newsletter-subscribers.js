const mongoose = require('mongoose')

const newsSubsSchema = new mongoose.Schema({
        email: {
                type: String,
                required: true
        }
}, {
        versionKey: false
});

module.exports = mongoose.model('newsSubs', newsSubsSchema, 'newsletter-subscribers');