const mongoose = require('mongoose');
require('dotenv').config()

exports.connectdb = function () {
        console.log("Connecting to Franchise Hub database...")
        try {
                mongoose.connect(process.env.MONGODB_URI);
                console.log("Connected ✓");
        } catch (e) {
                console.log("Connection failed: Exiting...");
                console.error(e);
                process.exit(1);
        }
};