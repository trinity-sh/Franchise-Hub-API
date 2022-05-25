import mongoose from 'mongoose';

const icredSchema = new mongoose.Schema({
        _id: {
                type: String,
                required: true
        },
        password: {
                type: String,
                required: true
        }
});

module.exports = mongoose.model('icred', icredSchema, 'investor-login-cred');