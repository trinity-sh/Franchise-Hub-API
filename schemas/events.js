const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
        content: {        
                event_banner: {
                        type: String,
                        required: true
                },
                event_title: {
                        type: String,
                        required: true
                },
                event_date: {
                        type: String,
                        required: true
                },
                hotline_no: {
                        type: String,
                        required: true
                }
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('events', eventSchema, 'events');