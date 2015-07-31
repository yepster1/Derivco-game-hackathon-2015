//The preload function is run at the very start, in order to import the sprites and all the starting variables
var gameover = false;
var life = 300;
var difference = 0.1;

function preload() {
	// all the sprites.
	game.load.image('background', 'assets/starBackground.png');
    game.load.image('asteroid_big', 'assets/meteorBig.png');
    game.load.image('asteroid_small', 'assets/meteorSmall.png');    
    game.load.image('space_ship', 'assets/player.png');

    //TODO shield
}

function update() {
	if (gameover == false){
		life -=difference;
		if(light_enabled){
			updateShadowTexture(life);
		}
		
	if(life < 10){
		gameover = true;
	}
	if (cursors.up.isDown)
    {
        game.physics.arcade.accelerationFromRotation(player.rotation, 200, player.body.acceleration);
    }
    else
    {
        player.body.acceleration.set(1);
    }

    if (cursors.left.isDown)
    {
        player.body.angularVelocity = -300;
    }
    else if (cursors.right.isDown)
    {
        player.body.angularVelocity = 300;
    }
    else
    {
        player.body.angularVelocity = 0;
    }

    screenWrap(player);
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
