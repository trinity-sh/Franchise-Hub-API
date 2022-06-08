const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
        content: {        
                event_banner: {
                        type: String
                },
                event_title: {
                        type: String
                },
                event_link: {
                        type: String
                },
                event_date: {
                        type: String
                },
                hotline_no: {
                        type: String
                }
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('events', eventSchema, 'events');