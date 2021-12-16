'use strict';
module.exports = function(app) {
  var quoteList = require('../controllers/quoteController');

  // todoList Routes
  
  app.route('/quotegenerator')
    .get(quoteList.list_rand_quote)
    .post(quoteList.create_a_quote);

};

