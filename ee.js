var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

// server.on('request', function (request) {
//     request.approved = true;
// });
//
// server.on('request', function (request) {
//     console.log(request);
// });
//
// server.emit('request', {from: "Клиент"});
// server.emit('request', {from: "Второй клиент"});
server.on('error', function () {

});
server.emit('error', new Error("ошибка"));