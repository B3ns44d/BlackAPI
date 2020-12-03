const socket_io = require('socket.io');
var io = socket_io();
const datalists = require('../models/User');

const changeStream = datalists.watch();

changeStream.on('change', (change) => {
    console.log(change); // You could parse out the needed info and send only that data. 
    io.emit('changeData', change);
})

io.on('connection', function () {
    console.log('connected');
});

var socket = io;
module.exports = socket;