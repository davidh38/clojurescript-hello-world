const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

global.map1 = new Map();
global.map1['0'] = [];
global.map1['1'] = [];
global.map1['2'] = [];
global.map1['3'] = [];
global.map1['4'] = [];

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  msg = global.map1;
  const a = JSON.stringify(msg);
  io.emit('chat message', a);
  socket.on('disconnect', () => {
    console.log('user disconnected');

  });

  //insert msg
  //select *
  socket.on('chat message', (msg) => {
    console.log(msg[0])
    global.map1[msg[0]].push(msg.slice(1));
    msg = global.map1;
    console.log(msg);
    const a = JSON.stringify(msg);
    io.emit('chat message', a
 );
  });

//io.on('connection', (socket) => {
//  socket.on('chat message', (msg) => {
//    io.emit('chat message', msg);
//  });
//});

});server.listen(3000, () => {
  console.log('listening on *:3000');
});
