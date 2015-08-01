var gameover = false;
var life = 300;
var difference = 0.3;
var max_acceleration = 1;
var sound;
var blast;

function preload() {
	// all the sprites.
	
	game.load.image('plus', 'assets/plus.png');					//loading of resources
	game.load.image('background', 'assets/starBackground.png');
    game.load.image('asteroid_big', 'assets/meteorBig.png');
    game.load.image('asteroid_small', 'assets/meteorSmall.png');    
    game.load.image('bullet', 'assets/bullet.png');
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
	        player.body.acceleration.set(max_acceleration);
	    }
	    if (cursors.left.isDown)	player.body.angularVelocity = -300;	    
	    else if (cursors.right.isDown)	player.body.angularVelocity = 300;	    
	    else	player.body.angularVelocity = 0;
	    screenWrap(player);
	      bullets.forEachExists(screenWrap, this);
	    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
	    	fireBullet();
	    } 	    
	    asteroids.forEachExists(screenWrap, this);    
	    	
	    game.physics.arcade.overlap(player, asteroids, collideAsteroid, null, this);	    
		game.physics.arcade.overlap(player, pickups, collidePickup, null, this);
		game.physics.arcade.overlap(bullets, asteroids, collideBulletAsteroid, null, this);
	}else	life = 0;
}
function screenWrap (sprite) {

    if (sprite.x < 0)	sprite.x = game.width;
    else if (sprite.x > game.width)	sprite.x = 0;
    if (sprite.y < 0)	sprite.y = game.height;
    else if (sprite.y > game.height)	sprite.y = 0;

}

