const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3000

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
