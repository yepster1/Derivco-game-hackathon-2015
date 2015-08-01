function createAsteroid(){
	var valx = Math.round(Math.random()*game.width)+1;
		var valy = Math.round(Math.random()*game.height)+1;		
		while(player.x -136 < valx && valx < player.x){
			 valx = Math.round(Math.random()*game.width)+1;
		}
		while(player.y -111 < valy && valy < player.y){
			 valy = Math.round(Math.random()*game.height)+1;
		}
	if((Math.round(Math.random()*3)+1) == 1){	
		var asteroid = asteroids.create(valx,
			valy, 'asteroid_big');			
	}else{
		var asteroid = asteroids.create(valx,
			valy, 'asteroid_small');
	}
}	