var app = require('./app');
var port = process.env.PORT || 1000;

var server = app.listen(port,function(){
	console.log('Express Server Listening on port :  ' + port);
});