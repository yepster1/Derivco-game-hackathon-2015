//By Oliver De Bruin and Cary Small from UCT
function createAsteroid(){									// Asteroid spawning function. Only spawns asteroids if
	var valx = Math.round(Math.random()*game.width)+1;		// the asteroid is not in the rockets vicinity.
		var valy = Math.round(Math.random()*game.height)+1;		
		while(player.x -150 < valx && valx < player.x){
			 valx = Math.round(Math.random()*game.width)+1;
		}
		while(player.y -135 < valy && valy < player.y){
			 valy = Math.round(Math.random()*game.height)+1;
		}
	if((Math.round(Math.random()*3)+1) == 1){	
		var asteroid = asteroids.create(valx,
			valy, 'asteroid_big');		
		asteroid.body.acceleration.set(max_acceleration);	
	}else{
		var asteroid = asteroids.create(valx,
			valy, 'asteroid_small');
		asteroid.body.acceleration.set(max_acceleration);	
	}
}	
