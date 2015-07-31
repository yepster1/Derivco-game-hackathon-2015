//The preload function is run at the very start, in order to import the sprites and all the starting variables
function preload() {
	// all the sprites.
	game.load.image('background', 'assets/starBackground.png');
    game.load.image('asteriod_big', 'assets/meteorBig.png');
    game.load.image('asteriod_big', 'assets/meteorSmall.png');
    game.load.image('space_ship', 'assets/player.png');
}

function update() {
	updateShadowTexture();
}
