 game.load.image('bullet', 'assets/bullet.png');

 /*  bullets.forEachExists(screenWrap, this);
	    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
	    	fireBullet();
	    } */ FROM screenWrap

//game.physics.arcade.overlap(bullets, asteroids, bulletCollide, null, game);

//FROM MAIN ^^




/*bullets = game.add.group();
	bullets.enableBody = true;
	bullets.physicsBodyType = Phaser.Physics.ARCADE;

	bullets.createMultiple(40, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 0.5);	

	cursors = game.input.keyboard.createCursorKeys();
	game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);*/


/*function fireBullet(){
	if (game.time.now > bulletTime)
    {
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(player.body.x + 16, player.body.y + 16);
            bullet.lifespan = 2000;
            bullet.rotation = sprite.rotation;
            game.physics.arcade.velocityFromRotation(player.rotation, 400, bullet.body.velocity);
            bulletTime = game.time.now + 50;
        }
    }
}
*/


//CREATE ^^




function bulletCollide(){
    console.log("bullet collided");
}


