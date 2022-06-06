const mongoose = require('mongoose')

const freeAdviceSchema = new mongoose.Schema({
        metadata: {
                is_read: {
                        type: Boolean,
                        default: false
                }
        },
        content: {
                advise_on: {
                        type: String
                },
                email: {
                        type: String
                },
                phone_no: {
                        type: String
                }
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('freeAdvice', freeAdviceSchema, 'free-advice');