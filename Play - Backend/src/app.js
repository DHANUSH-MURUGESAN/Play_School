const express = require('express');
const http = require('http');
const router = require('./Routes');
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());
app.use(router);

const server = http.createServer(app);
module.exports = server;