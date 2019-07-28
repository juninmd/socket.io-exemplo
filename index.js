var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var path = require('path');

var idDoCara = '';

// Routing
io.listen('3001');

app.get('/batata', (req, res, next) => {
  io.sockets.sockets[idDoCara].emit('batata', 'batata');
  res.send({ status: 'ok' });
});


app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  socket.on('talkei', function (data) {
    console.log('talkei recebido, enviando goku');
    socket.emit('goku', 'teletransporte');
  })
  console.info(`Client connected [id=${socket.id}]`);

  idDoCara = socket.id;
  // when socket disconnects, remove it from the list:
  socket.on("disconnect", () => {
    console.info(`Client gone [id=${socket.id}]`);
  });
});


http.listen(port, function () {
  console.log('listening on *:' + port);
});