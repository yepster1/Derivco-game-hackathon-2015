asteroids = [];

function createAsteroid(){
	var valx = Math.round(Math.random()*game.width)+1;
		var valy = Math.round(Math.random()*game.height)+1;
		console.log("valx:  " +valx)
		console.log("player.x: "+player.x);
		console.log("player.x - player.width: "+(player.x - player.width));
		while(player.x -136 < valx && valx < player.x){
			 valx = Math.round(Math.random()*game.width)+1;
		}
		while(player.y -111 < valy && valy < player.y){
			 valy = Math.round(Math.random()*game.height)+1;
		}
	if((Math.round(Math.random()*3)+1) == 1){	
		asteroids.push(game.add.sprite(valx,
			valy, 'asteroid_big'));			
	}else{
		asteroids.push(game.add.sprite(valx,
			valy, 'asteroid_small'));
	}
}	