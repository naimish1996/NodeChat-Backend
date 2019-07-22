var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var socketioJwt = require('socketio-jwt');


module.exports = ()=>{
    
    io.on('connection', socketioJwt.authorize({
        secret: 'SECRET_KEY',
        timeout: 15000 // 15 seconds to send the authentication message
      })).on('authenticated', function(socket) {
        //this socket is authenticated, we are good to handle more events from it.
        console.log('hello! ' + socket.decoded_token.name);
      }); 
    
 app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

http.listen(4000, function(){
  console.log('listening on *:4000');
});

// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//       console.log('user disconnected');
//     });
//   });

 

}