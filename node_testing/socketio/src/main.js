const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

global.map1 = new Map();
global.map1.set(1,[]);
global.map1.set(2,[]);
global.map1.set(3,[]);
global.map1.set(4,[]);
global.map1.set(5,[])


app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('chat message', global.map1);
  socket.on('disconnect', () => {
    console.log('user disconnected');


  });

  //insert msg
  //select *
  socket.on('chat message', (msg) => {
    a = global.map1.get(msg[1])
    a.push(msg.slice(1));
    console.log("test+++")
    msg = global.map1;
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
