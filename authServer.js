import dotenv from 'dotenv'
import express from 'express';
import jwt from'jsonwebtoken';
import bcrypt from 'bcrypt';

const app = express();
dotenv.config();

// setting up mdb
const client = new MongoClient(process.env.MONGODB_URI);
async function mdb() { await client.connect(); }
mdb();

                // -- admin collections --
        const admin_login_cred = client.db("user-data").collection("admin-login-cred");
                // -- user collections --
        const franchisor_login_cred = client.db("user-data").collection("franchisor-login-cred");
        const franchisor_data = client.db("user-data").collection("franchisor-data");
        const investor_login_cred = client.db("user-data").collection("investor-login-cred");
        const investor_data = client.db("user-data").collection("investor-data");
        const doc = { message: "hi" };
        console.log(franchisor_data.insertOne(doc));

// register middleware
app.use(express.json());

// user registration
app.post('/users/investor/register', (req, res) => {
        
});

app.post('/users/franchisor/register', (req, res) => {
        
});

// user login
app.post('/users/investor/login', (req, res) => {
        
});

app.post('/users/franchisor/login', (req, res) => {
        
});