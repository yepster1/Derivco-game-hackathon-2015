//creates world

var light_enabled = true;
var max_asteroids = 20;
var fuel = 300;
var starttTime;
var player;
var light         = true;
var fuel          = 300;

function create(){
	//game.physics
	
	game.add.sprite(0, 0, 'background');
	player = game.add.sprite(game.width/2, game.height/2, 'space_ship'); 		
	
	startTime = game.time.time;
	movement();
	startTime                  = game.time.time;
	for (var i= 0; i < max_asteroids; i++) {	//Create Initial asteroids
		createAsteroid();
	};
	if(light_enabled){							//Create light/Shadow texture
		game.stage.backgroundColor = 0x4488cc;
		game.shadowTexture         = game.add.bitmapData(game.width,game.height);
		var lightSprite            = game.add.image(0,0,game.shadowTexture);
		lightSprite.blendMode      = Phaser.blendModes.MULTIPLY;		
	}	
	
	
}



function movement(){
	game.renderer.clearBeforeRender = false;
    game.renderer.roundPixels = true;	
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.physics.enable(player, Phaser.Physics.ARCADE);	

	//player.drag.set(100);
    //player.maxVelocity.set(200);
	cursors = game.input.keyboard.createCursorKeys();
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
