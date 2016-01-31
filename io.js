var io = require('socket.io')();

io.on('connection', function(socket){

  console.log("User connected ayo!");

  socket.on('add-message', function (data) {
      io.emit('add-message', data);
    });

});

module.exports = io;

