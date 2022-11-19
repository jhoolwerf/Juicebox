require('dotenv').config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const apiRouter = require('./api');

const { client } = require('./db');
client.connect();

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(express.json());
server.use('/api', apiRouter);


const PORT = 3000;
server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});