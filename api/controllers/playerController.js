'use strict';


var mongoose = require('mongoose'),
  Player = mongoose.model('Players');
  Spell = mongoose.model('Spells');


// players
exports.list_all_players = function(req, res) {
  Player.find({}, function(err, player) {
    if (err)
      res.send(err);
    res.json(player);
  });
};

exports.create_player = function(req, res) {
  var new_spell = new Spell(req.body);
  new_spell.save(function(err, spell) {
    if (err)
      res.send(err);
    res.json(spell);
  });
};

exports.delete_player = function(req, res) {
  Player.remove({
    _id: req.params.playerId
  }, function(err, player) {
    if (err)
      res.send(err);
    res.json({ message: 'Player deleted.' });
  });
};

// spells
exports.list_all_spells = function(req, res) {
  Spell.find({}, function(err, spell) {
    if (err)
      res.send(err);
    res.json(spell);
  });
};

exports.craft_spell = function(req, res) {
  var new_spell = new Spell(req.body);
  new_spell.save(function(err, spell) {
    if (err)
      res.send(err);
    res.json(spell);
  });
};

exports.use_spell = function(req, res) {
  Spell.findById(req.params.spellId, function(err, spell) {
    if (err)
      res.send(err);
    res.json(spell);
  });
};


