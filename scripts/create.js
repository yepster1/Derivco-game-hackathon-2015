//creates world

var light_enabled = true;
var max_asteroids = 20;
var light         = true;
var fuel          = 300;

function create(){
	//game.physics	
	game.add.sprite(0, 0, 'background');
	player                     = game.add.sprite(game.width/2, game.height/2, 'space_ship');
	
	startTime                  = game.time.time;
	player                     = game.add.sprite(game.width/2, game.height/2, 'space_ship'); 	
	
	if(light_enabled){							//Create light/Shadow texture
		game.stage.backgroundColor = 0x4488cc;
		game.shadowTexture         = game.add.bitmapData(game.width,game.height);
		var lightSprite            = game.add.image(0,0,game.shadowTexture);
		lightSprite.blendMode      = Phaser.blendModes.MULTIPLY;		
	}	
	
	for (var i= 0; i < max_asteroids; i++) {	//Create Initial asteroids
		createAsteroid();
	};
}



function movement(){

}

function updateShadowTexture(lightra){
	game.LIGHT_RADIUS = lightra;	
	game.shadowTexture.context.fillStyle = 'rgb(0,0,0)';
	game.shadowTexture.context.fillRect(0,0,game.width,game.height);
	game.shadowTexture.context.beginPath();
	game.shadowTexture.context.fillStyle = 'rgb(255,255,255)';
	game.shadowTexture.context.arc(player.x+player.width/2,player.y+player.height/2,game.LIGHT_RADIUS,0,Math.PI*2);
	game.shadowTexture.context.fill();
	game.shadowTexture.dirty = true;
	
}
