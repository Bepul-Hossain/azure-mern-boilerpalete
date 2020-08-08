
var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Bepul:Bepul@cluster0-shard-00-00-lo1zs.mongodb.net:27017,cluster0-shard-00-01-lo1zs.mongodb.net:27017,cluster0-shard-00-02-lo1zs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"


router.get('/', (req, res, next) => {
	//console.log('ok');
	MongoClient.connect(url, function(err, db) {
		
		if (err) throw err;
		var dbo = db.db("azureboilerplate");
		dbo.collection("collection1").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
    		console.log(result);
    		res.json(result)
    		db.close();
    	});
	}); 
});

module.exports = router;