function collideAsteroid(){ //Collision call back for overlap between rocket ship and asteroids
	blast.play();
	sound.pause();
	player.animations.play('exposion', 20, true);
	gameover = true;
}

function collidePickup(){
	life += 100;
	pickups.forEachExists(update_drop, this);	
}


function collideBulletAsteroid(bullet, asteroid){
    asteroid.kill();
    createAsteroid();
    bullet.kill();
}
