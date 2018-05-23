const express = require('express');
const bodyParser = require('body-parser');
const MongoClient  = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.json());

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




app.post('/db',authMiddleware,requestMiddleWare,function(req,res,next){

var data=req.body;


if(data.hasOwnProperty('productId')){
	if(data['productId']=='1')
		data['ProductName']='Bike Insurance'
	else if(data['productId']=='10')
		data['ProductName']='Car Insurance'
}

res.send(data);
/*MongoClient.connect('mongodb://rajeev:rajeev@ds131800.mlab.com:31800/firstdatabase', { useNewUrlParser: true },function(err,client){
	if(err)
		return console.log(err);
	var db = client.db('firstdatabase');
	db.collection('quotes').find({"name":"rajeev ranjan"}).toArray(function(err,result){
		if (err) 
			{
				return console.log(err);
			}
			else{
				res.send(result);
		console.log(result);
	}
	})*/
});
function authMiddleware(req,res,next)
{
	var data=req.headers;
	if(data['key']=='123456789'){
		return next();
	}
	else{
		return res.status(401).json({Message:'Not Authorized'});
	}
}

function requestMiddleWare(req,res,next){

		var data = req.body;
		if(data.hasOwnProperty('productId')){
			if(data['productId']=='10'  || data['productId']=='1')
				return next();
			else
				return res.status(400).json({Message:'Product Id Should be 10'});

		}else{
			return res.status(400).json({Message:'Please send ProductID'});
		}	
}









