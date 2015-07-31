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
		if(light){
			updateShadowTexture(life);
		}
		if(life == 10){
			gameover = true;
		}
	}
}

