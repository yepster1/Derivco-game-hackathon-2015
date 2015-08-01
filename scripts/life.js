
function create_drop(){
	for (var i = 0; i < max_pickups; i++) {
		var plus_pickup = pickups.create(Math.round(Math.random()*game.width)+1,
		Math.round(Math.random()*game.height)+1, 'plus');
		game.physics.arcade.enable(plus_pickup);
	};	
}

function update_drop(sprite){	
	sprite.x = Math.round(Math.random()*game.width)+1;
	sprite.y = Math.round(Math.random()*game.height)+1;	
}