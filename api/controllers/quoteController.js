var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var random = require('mongoose-random');
Quote = mongoose.model('Quote');
//  var url = "mongodb://localhost:27017/";
  
/*   
function getData(db, res){
	db.getCollection("Quotes").aggregate([ 
, {
    $sample : {
        size : 1
    }
} ]).result[0];
}   */




exports.list_rand_quote = function(req, res) {
//	MongoClient.connect(url, function(err, db) {
	//var dbo = db.db("quoteGeneratorDB");
	
	/*
	Quote.findRandom().limit(1).exec(function (err, songs) {
	if (err) throw err;
	res.json(songs)
	console.log(songs);
  */
  async function randquote(){
    console.log("inside randquote");
    //const someQuote = await Quote.findOne({});
    
    await Quote.findOne({},'quote').exec(function(err,songs){if (err) throw err;
      res.json(songs)
      console.log(songs);
    });
    
    console.log("findone done:");
    
    //console.log("findone done:" + someQuote);
    //return someQuote;
    }


  console.log("being called");
randquote();







};
	
	
	//below code can fetch the first document of the collection
	/* dbo.collection("quotes").findOne({}, function(err, result) {
    if (err) throw err;
	res.json(result);
    console.log(result);
    db.close();
  }); */
  //above code can fetch the first document of the collection
  
	/* var randomDoc = db.getCollection("Quotes").aggregate([ 
, {
    $sample : {
        size : 1
    }
} ]).result[0];
  Quote.find({}, function(err, randomDoc) {
    if (err)
      res.send(err);
    res.json(randomDoc);
  }); */
//})





exports.create_a_quote = function(req, res) {
  var new_task = new Quote(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
