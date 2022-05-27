const express = require('express');
const jwt  = require('jsonwebtoken');
const bcrypt  = require('bcrypt');
const mongoose = require('mongoose');

const admcred = require('./schemas/admin-login-cred');
const admtoken = require('./schemas/admin-access-token');

require('dotenv').config();

// init. express
const app = express();
require('./mdb').connectdb();

// register middleware
app.use(express.json());

// admin login
app.post('/api/v1/admin/login', async (req, res) => {
        try {
                const adminUser = await admcred.findById(req.body.username);
                if (adminUser == null)
                        return res.send({
                                success: false,
                                message: "Invalid credential(s)"
                        });
                console.log(adminUser);
        } catch (e) {
                res.status(500).send({
                        success: false,
                        message: "Internal server error: " + e
                });
        }
});

app.listen(process.env.PORT || 3000, () => console.log(`Listening on PORT ${process.env.PORT}...`));