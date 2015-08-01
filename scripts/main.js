//The preload function is run at the very start, in order to import the sprites and all the starting variables
var gameover = false;
var life = 300;
var difference = 0.3;
var acceleration_max = 1;
var sound;
var blast;

function preload() {
	// all the sprites.
	
	game.load.image('plus', 'assets/plus.png');
	game.load.image('background', 'assets/starBackground.png');
    game.load.image('asteroid_big', 'assets/meteorBig.png');
    game.load.image('asteroid_small', 'assets/meteorSmall.png');    
    game.load.spritesheet('space_ship', 'assets/player.png',100,100,4);
	game.load.audio('audio', "assets/rocket.mp3");
	game.load.audio('blast', "assets/blast.mp3");
	game.load.audio('end', "assets/end.mp3");
    //TODO shield
}


function update() {
	if (gameover == false){			
		life -=difference;
		if(light_enabled)	updateShadowTexture(life);		
		if(life < 10)	gameover = true;	
		if (cursors.up.isDown)
	    {    	
	    	player.animations.play('walk', 20, true);
	    	sound.resume();    	
	        game.physics.arcade.accelerationFromRotation(player.rotation, 200, player.body.acceleration);
	    }else{
	    	player.animations.play('still', 20, true);
	    	sound.pause();
	        player.body.acceleration.set(acceleration_max);
	    }
	    if (cursors.left.isDown)	player.body.angularVelocity = -300;	    
	    else if (cursors.right.isDown)	player.body.angularVelocity = 300;	    
	    else	player.body.angularVelocity = 0;
	    screenWrap(player);	 

	    game.physics.arcade.overlap(player, asteroids, collide, null, game);	    
		    
	}else{
		life = 0;
	}
}
function screenWrap (player) {

    if (player.x < 0)
    {
        player.x = game.width;
    }
    else if (player.x > game.width)
    {
        player.x = 0;
    }

    if (player.y < 0)
    {
        player.y = game.height;
    }
    else if (player.y > game.height)
    {
        player.y = 0;
    }

}

