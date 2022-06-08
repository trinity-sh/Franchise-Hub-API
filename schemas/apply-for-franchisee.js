const mongoose = require('mongoose')

const applyFSchema = new mongoose.Schema({
        metadata: {
                is_read: {
                        type: Boolean
                }
        },
        content: {        
                name: {
                        type: String
                },
                email: {
                        type: String
                },
                mobile: {
                        type: String
                },
                state: {
                        type: String
                },
                city: {
                        type: String
                },
                pincode: {
                        type: String
                },
                address: {
                        type: String
                },
                inv: {
                        type: Number
                }
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('apply-for-franchisee', applyFSchema, 'apply-for-franchisee');