const mongoose = require('mongoose')

const applyFSchema = new mongoose.Schema({
        metadata: {
                is_read: {
                        type: Boolean
                }
        },
        content: {        
                event_banner: {
                        type: String
                },
                event_title: {
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

module.exports = mongoose.model('apply-for-franchisee', applyFSchema, 'apply-for-franchisee');