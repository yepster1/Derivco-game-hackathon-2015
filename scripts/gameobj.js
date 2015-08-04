if(debug) var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render });
else var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function init(){		
	
	
	
};

function render() {
    game.debug.bodyInfo(player, 32, 32);
    game.debug.body(player);
    // asteroids.forEach(function(asteroid){
    // 	game.debug.body(asteroid)
    // }, asteroid);
    asteroids.forEach(	function(asteroid)	{
		game.debug.body(asteroid)
	});

}