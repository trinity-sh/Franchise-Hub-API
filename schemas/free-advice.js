const mongoose = require('mongoose')

const freeAdviceSchema = new mongoose.Schema({
        advise: {
                type: String,
                enum: ['expand-my-brand', 'buy-a-franchise'],
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
}, {
        versionKey: false
});

module.exports = mongoose.model('freeAdvice', freeAdviceSchema, 'free-advice');