'use strict';
var mongoose = require('mongoose');
var random = require('mongoose-random');
var Schema = mongoose.Schema;


var QuoteSchema = new Schema({
  quote: {
    type: String,
    required: 'Kindly enter the quote text.'
  },
  author: {
    type: String,
    default: 'Anonymous'
  },
  quotetype: {
    type: [{
      type: String,
      enum: ['love', 'inspirational', 'patriotic']
    }],
    default: ['love']
  }
});
QuoteSchema.plugin(random, { path: 'random' });

module.exports = mongoose.model('Quotes', QuoteSchema);