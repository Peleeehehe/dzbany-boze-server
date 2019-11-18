const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('send-message', (data) => {
        io.emit('new-message', data);
    });
});

io.listen(5000);
console.log('started server');