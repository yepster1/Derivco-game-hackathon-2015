function collide(){
	blast.play();
	audio.pause();
	player.animations.play('exposion', 20, true);
	gameover = true;
}