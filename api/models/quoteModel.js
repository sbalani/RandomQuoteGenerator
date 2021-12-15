'use strict';
var mongoose = require('mongoose');
var random = require('mongoose-random');
//var Schema = mongoose.Schema;

const { Schema } = mongoose;

/*
var QuoteSchema = new Schema({
  quote: {
    type: String,
  },
  author: {
    type: String,
  },
  quotetype: {
      type: String,
    }
});*/

const quoteSchema = new Schema({
quote: String,
author: String,
quotetype: String
}, {collection: 'Quotes'});

const Quote = mongoose.model('Quote', quoteSchema);
console.log("Quote:" + Quote);
quoteSchema.plugin(random, { path: 'random' });

//module.exports = mongoose.model('Quotes', QuoteSchema);

module.exports = Quote;