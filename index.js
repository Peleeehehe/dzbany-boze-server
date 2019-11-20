const io = require('socket.io')();

io.on('connection', (client) => {
    client.on('new-message-from-client', ({ message, id }) => {
        const messageObject = {
            message,
            id
        };
        client.broadcast.emit('new-message-from-server', messageObject);
    });
});

io.listen(5000);
console.log('started server');