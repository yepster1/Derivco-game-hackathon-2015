//creates world
function create(){
	//game.physics
	game.add.sprite(0, 0, 'background');
	player = game.add.sprite(400, 300, 'space_ship');

	game.stage.backgroundColor = 0x4488cc;

	game.LIGHT_RADIUS = 100;

	game.shadowTexture = game.add.bitmapData(game.width,game.height);

	var lightSprite = game.add.image(0,0,game.shadowTexture);

	lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

	game.input.activePointer.x = game.width/2;
	game.input.activePointer.y = game.height/2;
};

function updateShadowTexture(){
	game.shadowTexture.context.fillStyle = 'rgb(0,0,0)';
	game.shadowTexture.context.fillRect(0,0,game.width,game.height);

	game.shadowTexture.context.beginPath();
	game.shadowTexture.context.fillStyle = 'rgb(255,255,255)';
	game.shadowTexture.context.arc(player.x+player.width/2,player.y+player.height/2,game.LIGHT_RADIUS,0,Math.PI*2);
	game.shadowTexture.context.fill();
}