const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const router = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const server = http.createServer(app);
const io = socketio(server, { cors: { origin: 'http://localhost:3000' } });

module.exports = { io, server };
