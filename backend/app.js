const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const server = http.createServer(app);
const io = socketio(server, { cors: { origin: 'http://localhost:3000' } });

// const users = [];

// io.use((socket, next) => {
//   const username = socket.handshake.auth.username;
//   if (!username) {
//     return next(new Error('invalid username'));
//   }
//   socket.username = username;
//   next();
// });

module.exports = { io, server };
