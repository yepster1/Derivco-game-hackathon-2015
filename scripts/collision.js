function collide(){
	blast.play();
	sound.pause();
	player.animations.play('exposion', 20, true);
	gameover = true;
}

