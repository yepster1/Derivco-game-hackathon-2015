//creates world

var light_enabled = true;
var max_asteroids = 20;
var fuel          = 300;
var starttTime;
var light         = true;
var max_velocity  = 150;
var drag          = 50;
var bulletTime = 0;
		
function create(){
	sound = game.add.sound('audio');
	sound.play();
	game.add.sprite(0, 0, 'background'); 		
	player = game.add.sprite(game.width/2, game.height/2, 'space_ship');
	player.anchor.set(0.5, 0.5);	
	player.scale.setTo(0.6,0.6);	
	
	game.physics.arcade.enable(player);
	movement();
	startTime = game.time.time;

	asteroids = game.add.group();
	asteroids.enableBody = true;
	
	for (var i= 0; i < max_asteroids; i++) {	//Create Initial asteroids
		createAsteroid();		
	}
	if(light_enabled){							//Create light/Shadow texture
		game.stage.backgroundColor = 0x4488cc;
		game.shadowTexture         = game.add.bitmapData(game.width,game.height);
		var lightSprite            = game.add.image(0,0,game.shadowTexture);
		lightSprite.blendMode      = Phaser.blendModes.MULTIPLY;		
	}	
	centre();		
}

function centre(){
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.scale.refresh();
}

function movement(){
	game.renderer.clearBeforeRender = false;
    game.renderer.roundPixels = true;	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.enable(player, Phaser.Physics.ARCADE);	
	player.body.drag.set(drag);
    player.body.maxVelocity.set(max_velocity);
    cursors = game.input.keyboard.createCursorKeys();	
}

function updateShadowTexture(lightra){
	game.LIGHT_RADIUS = lightra;	
	game.shadowTexture.context.fillStyle = 'rgb(0,0,0)';
	game.shadowTexture.context.fillRect(0,0,game.width,game.height);
	game.shadowTexture.context.beginPath();
	game.shadowTexture.context.fillStyle = 'rgb(255,255,255)';
	game.shadowTexture.context.arc(player.x,player.y,game.LIGHT_RADIUS,0,Math.PI*2);
	game.shadowTexture.context.fill();
	game.shadowTexture.dirty = true;
}
