function collideAsteroid(){ //Collision call back for overlap between rocket ship and asteroids
	blast.play();
	player.animations.play('exposion', 20, true);
	gameover = true;
}

function collidePickup(){
	life += 100;
	update_drop();	
}

