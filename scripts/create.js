//creates world

var light_enabled = true;
var max_asteroids = 15;
var fuel          = 300;
var starttTime;
var light         = true;
var max_velocity  = 150;
var drag          = 50;
var bulletTime = 0;
		
function create(){
	sound = game.add.sound('audio');		// setting up sound
	blast = game.add.sound('blast');
	sound.play();
	game.add.sprite(0, 0, 'background'); 

	player = game.add.sprite(game.width/2, game.height/2, 'space_ship');	//ship animation
	player.animations.add('walk', [1, 2],10, true);
	player.animations.add('still', [0],10, true);
	player.animations.add('exposion', [3],10, true);
	player.anchor.set(0.5, 0.5);	
	player.scale.setTo(0.6,0.6);	
	
	game.physics.arcade.enable(player);	//setting physcis of the ship
	
	movement();
	create_drop();	
	startTime = game.time.time;

	asteroids = game.add.group();
	asteroids.enableBody = true;
	
	for (var i= 0; i < max_asteroids; i++) {	//Create Initial asteroids
		createAsteroid();		
	};
	
	centreCanvas();
	if(light_enabled){							//Create light/Shadow texture
		game.stage.backgroundColor = 0x4488cc;
		game.shadowTexture         = game.add.bitmapData(game.width,game.height);
		var lightSprite            = game.add.image(0,0,game.shadowTexture);
		lightSprite.blendMode      = Phaser.blendModes.MULTIPLY;		
	}			
}

function centreCanvas(){				//Centres the main canvas
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.scale.refresh();
}

function movement(){					//Movement of rocket ship
	game.renderer.clearBeforeRender = false;
    game.renderer.roundPixels = true;	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.enable(player, Phaser.Physics.ARCADE);	
	player.body.drag.set(drag);
    player.body.maxVelocity.set(max_velocity);
    cursors = game.input.keyboard.createCursorKeys();	
}

function updateShadowTexture(lightra){					//Shadow texture setup
	game.LIGHT_RADIUS = lightra;	
	game.shadowTexture.context.fillStyle = 'rgb(0,0,0)';
	game.shadowTexture.context.fillRect(0,0,game.width,game.height);
	game.shadowTexture.context.beginPath();
	game.shadowTexture.context.fillStyle = 'rgb(255,255,255)';
	game.shadowTexture.context.arc(player.x,player.y,game.LIGHT_RADIUS,0,Math.PI*2);
	game.shadowTexture.context.fill();
	game.shadowTexture.dirty = true;
}
