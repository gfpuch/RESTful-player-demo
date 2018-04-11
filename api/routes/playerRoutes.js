'use strict';
module.exports = function(app) {
  var player = require('../controllers/playerController');


  // player routes
  app.route('/players')
    .get(player.list_all_players)
    .post(player.create_player)

  app.route('/players/:playerId')
    .delete(player.delete_player)
    
  // spell routes
  app.route('/spells')
    .get(player.list_all_spells)
    .put(player.craft_spell);


  app.route('/spells/:spellId')
    .get(player.use_spell)
};