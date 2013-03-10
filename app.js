
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


/* Rutas */
app.get("/", function(reg, res){
	res.render("index", {
		title : "Definicion de Primeros Auxilios"
	});
});

app.get("/Botiquin", function(req, res){
	res.render("Botiquin", {
	title : "Botiquin"
	});
});

app.get("/Shock", function(req, res){
	res.render("Shock", {
	title : "Shock"
	});
});

app.get("/Heridas", function(req, res){
	res.render("Heridas", {
	title : "Heridas"
	});
});

app.get("/Quemaduras", function(req, res){
	res.render("Quemaduras", {
	title : "Quemaduras"
	});
});



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
