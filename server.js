var express = require('express')
var  app = express()
var  port = process.env.PORT || 4000
const mongoose = require('mongoose')
var  Task = require('./api/models/quoteModel') //created model loading here
var  bodyParser = require('body-parser')
  

// mongoose instance connection url connection

main().catch(err => console.log(err));

async function main(){
  await mongoose.connect('mongodb+srv://sbalani:malaga123@cluster0.uuhej.mongodb.net/Quotes?retryWrites=true&w=majority')
}

/*mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://sbalani:malaga123@cluster0.uuhej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); 
*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/quoteRoutes'); //importing route
const Quote = require('./api/models/quoteModel')
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


async function filterget(){

const filter = {};
const all = await Quote.find(filter);
console.log("all:" + all)
}

filterget();
//console.log("quotess:" + quotess);