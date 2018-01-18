// update collection
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
	if( error ) { throw error };
	
	var dbObj = db.db("testgamesdb");
	var querydata = {genre: "Simulator"}; 
	var newdata = {genre: "Train porn"};
	var update = {$set:newdata};

	dbObj.collection("games").updateOne(querydata, update, function(err, res){
		if(error) throw error;		
		console.log("Document Updated");	
		db.close();
	});

});