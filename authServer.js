const express = require('express');
const jwt  = require('jsonwebtoken');
const bcrypt  = require('bcrypt');

require('dotenv').config();
require('./mdb').connectdb();

const AdminCred = require('./schemas/admin-login-cred');
const InvestorCred = require('./schemas/investor-login-cred');
const InvestorData = require('./schemas/investor-data');
const FranchisorCred = require('./schemas/franchisor-login-cred');
const FranchisorData = require('./schemas/franchisor-data');

const app = express();

// register middleware
app.use(express.json());

// user registration
app.post('/api/v1/investor/register', async (req, res) => {
        try {
                const icred = await InvestorCred.create({
                        _id: req.body.email,
                        password: req.body.password
                });
        
                const idata = await InvestorData.create({
                        _id: req.body.email,
                        name: req.body.name,
                        mobile_no: req.body.mobile_no,
                        dob: req.body.dob,
                        street_address: req.body.street_address,
                        city: req.body.city,
                        state: req.body.state,
                        country: req.body.country,
                        pincode: req.body.pincode,
                        industry_type: req.body.industry_type,
                        income_range: req.body.income_range,
                        investment_range: req.body.investment_range,
                        avail_capital: req.body.avail_capital,
                        need_for_loan: req.body.need_for_loan,
                        investment_when: req.body.investment_when,
                        educ_qual: req.body.educ_qual,
                        occupation: req.body.occupation,
                        prior_xp: req.body.prior_xp,
                        looking_for: req.body.looking_for,
                        lfb_in_city: req.body.lfb_in_city,
                        lfb_in_state: req.body.lfb_in_state,
                        own_property: req.body.own_property
                });
        } catch (e) {
                res.send({ error: `${e}` });
        }
});

app.post('/api/v1/franchisor/register', (req, res) => {
        
});

// user login
app.post('/api/v1/investor/login', (req, res) => {
        
});

app.post('/api/v1/franchisor/login', (req, res) => {
        
});

app.listen(process.env.PORT || 4000, () => console.log(`Listening on PORT ${process.env.PORT}`));