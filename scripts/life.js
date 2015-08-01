pickups = [];
function create_drop(){
	for (var i = 0; i < 3; i++) {
		plus_pickup = pickups.push(game.add.sprite(Math.round(Math.random()*game.width)+1,
		Math.round(Math.random()*game.height)+1, 'plus'));
		game.physics.arcade.enable(pickups[i]);
	};
	
}

function update_drop(){
	for (var i = 0; i < 3; i++) {		
		pickups[i].x = Math.round(Math.random()*game.width)+1;
		pickups[i].y = Math.round(Math.random()*game.height)+1;
	};
	
}