// Incluir librerias
var app = require('http').createServer(handler),
	io	= require('socket.io').listen(app),
	static = require('node-static'); // Para servir archivos

var INCREMENT = 0;

// La siguiente linea hará que todos los archivos dentro del directorio
// public sean accesibles desde la web
var fileServer = new static.Server('./public');

// Este es el puerto para tu servidor web
// Necesitarás ir a http://localhost:8000 para verlo
app.listen(8080);

// Si la url del socket del servidor es abierto en el navegador
function handler(request, response) {
	request.addListener('end', function(){
		fileServer.serve(request, response); // Esto retorna el archivo correcto
	});
}


io.sockets.on('connection', function(socket) {
	
	socket.on("push", function(data){
		socket.broadcast.emit("push", socket.id);
		socket.emit("i-push", socket.id);
	});
	
	socket.emit('join', socket.id);
	
	
});











