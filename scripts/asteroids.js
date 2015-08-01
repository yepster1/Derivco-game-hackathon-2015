function createAsteroid(){
	if((Math.round(Math.random()*3)+1) == 1){
		
		var asteroid = asteroids.create(Math.round(Math.random()*game.width)+1,
			Math.round(Math.random()*game.height)+1, 'asteroid_big');			
	}else{
		var asteroid = asteroids.create(Math.round(Math.random()*game.width)+1,
			Math.round(Math.random()*game.height)+1, 'asteroid_small');
	}		
}	