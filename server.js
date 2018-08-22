const express = require('express');
var app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


var server = app.listen(3000, function(req, res){
  console.log('listening on port 3000!');
});

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
  console.log('A user is connected');
  /**socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });**/
});
