//creates world
var light_enabled = false;
var max_asteroids = 20;
function create(){
	//game.physics	

	game.add.sprite(0, 0, 'background');
	player = game.add.sprite(game.width/2, game.height/2, 'space_ship'); 		
	createAsteroids();	

	if(light){									//TODO REMOVE IF		
		game.stage.backgroundColor = 0x4488cc;
		game.LIGHT_RADIUS = 100;
		game.shadowTexture = game.add.bitmapData(game.width,game.height);

		var lightSprite = game.add.image(0,0,game.shadowTexture);
		lightSprite.blendMode = Phaser.blendModes.MULTIPLY;		
	}
	
}

function createAsteroids(){
	asteroids = [];


	for (var i = 0; i < max_asteroids; i++) {
		if((Math.round(Math.random()*3)+1) == 1){
			asteroids.push(game.add.sprite(Math.round(Math.random()*game.width)+1,
				Math.round(Math.random()*game.height)+1, 'asteroid_big'));			
		}else{
			asteroids.push(game.add.sprite(Math.round(Math.random()*game.width)+1,
				Math.round(Math.random()*game.height)+1, 'asteroid_small'));
		}		
	};


}	

