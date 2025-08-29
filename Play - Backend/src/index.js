
const mongoose = require('mongoose');
const server = require('./app');
require('dotenv').config();

const mongodb_uri = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

mongoose.connect(mongodb_uri)
    .then(() => {
        console.log(" MongoDB connected successfully");
        server.listen(port, () => {
            console.log(` Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error(" Internal server error:", err);
    });


