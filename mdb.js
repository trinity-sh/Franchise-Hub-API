import mongoose from 'mongoose';

exports.connectdb = function () {
        console.log("Connecting to Franchise Hub database...")
        mongoose
                .connect(process.env.MONGODB_URI)
                .then(console.log("Connection to Franchise Hub database established!"))
                .catch((e) => {
                        console.error(`Couldn't connect to Franchise Hub database: ${e}`);
                        process.exit(1);
                });
};