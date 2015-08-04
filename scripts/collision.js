//By Oliver De Bruin and Cary Small from UCT
function collideAsteroid(){ //Collision call back for overlap between rocket ship and asteroids
	blast.play();
	sound.pause();
	player.animations.play('exposion', 20, true);		
	gameover = true;
	playGameover();
}

function collidePickup(){					//Collision of rocket with pickup - > callback of overlap
	light += pickup_bonus_life;
	ammo += pickup_bonus_ammo;
	pickups.forEachExists(powerup.respawnDrops, this);	
}


function collideBulletAsteroid(bullet, asteroid){	//Collision of bullet with asteroid -> callback of overlap
    asteroid.kill();
    createAsteroid();
    bullet.kill();
}
