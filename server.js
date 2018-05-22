const express = require('express');
const bodyParser = require('body-parser');
const mongoDb  = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.listen(1000,function(){
	console.log('Server Running ON Port 1000 ');
})

app.get('/',function(req,res){
	res.sendFile(__dirname + '/html/index.html');
})

app.post('/quotes',function(req,res){
	console.log(req.body);
	db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})


var db
mongoDb.connect('mongodb://rajeev:rajeev@ds131800.mlab.com:31800/firstdatabase', { useNewUrlParser: true },function(err,client){
	if(err)
		return console.log(err);
	db = client.db('firstdatabase')
	app.listen(3000,function(){
		console.log('Db listening on port 3000')
	})
})
