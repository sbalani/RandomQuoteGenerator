var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Task = require('./api/models/quoteModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://sbalani:malaga123@cluster0.uuhej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/quoteRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});