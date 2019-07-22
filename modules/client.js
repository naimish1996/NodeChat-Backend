var app = require('express')();

var http = require('http').createServer(app);
var io = require('socket.io')(http);
var socket = io.connect('http://localhost:4000');


module.exports = ()=>{
    socket.on('connect', function (socket) {
  socket
    .on('authenticated', function () {
      //do other things
    })
    .emit('authenticate', {token: jwt}); //send the jwt
});}