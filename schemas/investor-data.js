const mongoose = require('mongoose');

const idataSchema = new mongoose.Schema({
        _id: {
                type: String,
                required: true
        },
        name: {
                type: String,
                required: true
        },
        mobile_no: {
                type: String,
                required: true
        },
        dob: {
                type: Date,
                required: true
        },
        street_address: {
                type: String,
                required: true
        },
        city: {
                type: String,
                required: true
        },
        state: {
                type: String,
                required: true
        },
        country: {
                type: String,
                required: true
        },
        pincode: {
                type: String,
                required: true
        },
        industry_type: {
                type: String,
                required: true
        },
        income_range: {
                type: String,
                required: true
        },
        investment_range: {
                type: String,
                required: true
        },
        avail_capital: {
                type: String,
                required: true
        },
        need_for_loan: {
                type: Boolean,
                required: true
        },
        investment_when: {
                type: String,
                required: true
        },
        educ_qual: {
                type: String,
                required: true
        },
        occupation: {
                type: String,
                required: true
        },
        prior_xp: {
                type: Boolean,
                required: true
        },
        looking_for: {
                type: String,
                required: true
        },
        lfb_in_state: {
                type: String,
                required: true
        },
        lfb_in_city: {
                type: String,
                required: true
        },
        own_property: {
                type: Boolean,
                required: true
        }
});

module.exports = mongoose.model('idata', idataSchema, 'investor-data');