const mongoose = require('mongoose')

const freeAdviceSchema = new mongoose.Schema({
        metadata: {
                is_read: {
                        type: Boolean,
                        required: true,
                        default: false
                }
        },
        content: {
                advise_on: {
                        type: String,
                        required: true
                },
                email: {
                        type: String,
                        required: true
                },
                phone_no: {
                        type: String,
                        required: true
                }
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('freeAdvice', freeAdviceSchema, 'free-advice');