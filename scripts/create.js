//By Oliver De Bruin and Cary Small from UCT	
function create(){
	sound = game.add.sound('audio');		// setting up sound
	blast = game.add.sound('blast');
	pew = game.add.sound('pew');
	
	sound.play();
	game.add.sprite(0, 0, 'background'); 

	player = game.add.sprite(game.width/2, game.height/2, 'space_ship');	//Animation for rocket ship
	player.animations.add('walk', [1, 2],10, true);
	player.animations.add('still', [0],10, true);
	player.animations.add('exposion', [3],10, true);
	player.anchor.set(0.5, 0.5);	
	player.scale.setTo(0.6,0.6);	
	
	game.physics.arcade.enable(player);	//setting physcis of the ship
	
	movement();
		
	startTime               = game.time.time;
	pickups                 = game.add.group();				//Intialising pickups
	pickups.enableBody      = true;
	
	asteroids               = game.add.group();			//Initialising asteroids
	asteroids.enableBody    = true;
	create_drop();
	
	bullets                 = game.add.group();				//Declaring and initialising bullet objects and scaling
	bullets.enableBody      = true;
	bullets.physicsBodyType = Phaser.Physics.ARCADE;
	bullets.createMultiple(40, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 0.5);
    bullets.setAll('scale.x', 0.5);
    bullets.setAll('scale.y', 0.5);

	cursors = game.input.keyboard.createCursorKeys();
	game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);


	
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
	game.scale.pageAlignVertically   = true;
	game.scale.refresh();
}
	
	function movement(){					//Movement of rocket ship
	game.renderer.clearBeforeRender  = false;
	game.renderer.roundPixels        = true;	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.enable(player, Phaser.Physics.ARCADE);	
	player.body.drag.set(drag);
	player.body.maxVelocity.set(max_velocity);
	cursors                          = game.input.keyboard.createCursorKeys();	
}

function updateShadowTexture(lightra){					//Shadow texture setup
	game.LIGHT_RADIUS                    = lightra;	
	game.shadowTexture.context.fillStyle = 'rgb(0,0,0)';
	game.shadowTexture.context.fillRect(0,0,game.width,game.height);
	game.shadowTexture.context.beginPath();
	game.shadowTexture.context.fillStyle = 'rgb(255,255,255)';
	game.shadowTexture.context.arc(player.x,player.y,game.LIGHT_RADIUS,0,Math.PI*2);
	game.shadowTexture.context.fill();
	game.shadowTexture.dirty             = true;
}


function fireBullet(){
	if (game.time.now > bulletTime)
    {
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
			bullet.reset(player.body.x + 16, player.body.y + 16);
			bullet.lifespan = 2000;
			bullet.rotation = player.rotation;
			game.physics.arcade.velocityFromRotation(player.rotation, 400, bullet.body.velocity);
			pew.play();
			bulletTime      = game.time.now + 50;
        }
    }
}
