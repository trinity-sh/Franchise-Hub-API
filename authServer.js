require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

app.use(express.json())

// user registration
app.post('/users/investor/register', (req, res) => {
        
})

app.post('/users/franchisor/register', (req, res) => {
        
})

// user login
app.post('/users/investor/login', (req, res) => {
        
})

app.post('/users/franchisor/login', (req, res) => {
        
})