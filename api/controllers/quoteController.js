var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var random = require('mongoose-random');
const model = require('../models/quoteModel');
Quote = mongoose.model('Quote');
var util = require('util');


console.log("being called");
//console.log("model:" + model);



  





exports.list_rand_quote = function(req, res) {

  
  //console.log(util.inspect(res));
  async function randquote(){
    console.log("inside randquote");
    //const someQuote = await Quote.findOne({});
    
    await Quote.findOne({quotetype: "inspirational"},'quote').exec(function(err,songs){if (err) throw err;
      res.json(songs)
      console.log(songs);
    });
    
    console.log("findone done:");
    
    //console.log("findone done:" + someQuote);
    //return someQuote;
    }


  console.log("being called");


  async function getRandQuote2(){

    const count = await Quote.count()
    console.log("count:" + count);
    var random = Math.floor(Math.random() * count);
    const randquote = await Quote.findOne({},'Quote').skip(random);
    console.log(randquote);
    //return randquote ;
    res.json(randquote);
    
  
  
  
    /*
    const filter = {};
    const randquote = await Quote.findOne(filter);
    console.log("gotone" + randquote);
  */  
  }









//randquote();
getRandQuote2();

};
	
	



exports.create_a_quote = function(req, res) {
  var new_task = new Quote(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
