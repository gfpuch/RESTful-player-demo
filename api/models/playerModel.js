'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var playerSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of your character.'
  },
  class: {
    type: String,
    default: ['Novice']
  },
  level: {
    type: Number,
    default: ['1']
  },
  birthday: {
    type: Date,
    default: Date.now
  },
});

var spellSchema = new spellSchema({
  name: {
    type: String
  },
  element: {
    type: String
  },
  power: {
    type: Number
  },
  cost: {
    type: Number
  },
});

module.exports = mongoose.model('Players', playerSchema);
module.exports = mongoose.model('Spells', spellSchema);