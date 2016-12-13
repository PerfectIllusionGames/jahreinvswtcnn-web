var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
var server = app.listen(app.get('port'));
var io = require('socket.io')(server);



app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});


io.on('connection', function(socket){
  console.log('a user connected');
  alert("a user connected");
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
