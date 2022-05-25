import mongoose from 'mongoose';

const fcredSchema = new mongoose.Schema({
        _id: {
                type: String,
                required: true
        },
        password: {
                type: String,
                required: true
        }
});

module.exports = mongoose.model('fcred', fcredSchema, 'franchisor-login-cred');