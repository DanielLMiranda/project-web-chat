const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router);

const server = http.createServer(app);
const io = socketio(server);

module.exports = {
  server,
  io,
};
