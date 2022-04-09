const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

global.array =[];

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('chat message', global.array);
  socket.on('disconnect', () => {
    console.log('user disconnected');


  });

  //insert msg
  //select *
  socket.on('chat message', (msg) => {
    global.array.push("hi")
    msg = global.array;
    console.log("counter")
    console.log(msg)
    io.emit('chat message', msg);
  });

//io.on('connection', (socket) => {
//  socket.on('chat message', (msg) => {
//    io.emit('chat message', msg);
//  });
//});

});server.listen(3000, () => {
  console.log('listening on *:3000');
});
