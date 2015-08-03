//By Oliver De Bruin and Cary Small from UCT

powerup = {
	createDrop: function(){
		coords = checkSpawn();
		var plus_pickup = pickups.create(coords[0], coords[1], 'plus');
		game.physics.arcade.enable(plus_pickup);
	},

	updateDrop: function(sprite){
		coords = checkSpawn();
		sprite.x = coords[0];
		sprite.y = coords[1];
	}
}
