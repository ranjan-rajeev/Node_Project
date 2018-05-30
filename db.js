var mongoose = require('mongoose');
mongoose.connect('mongodb://rajeev:rajeev@ds131800.mlab.com:31800/firstdatabase');

var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function(){
	console.log('Connection to database is successful');
});