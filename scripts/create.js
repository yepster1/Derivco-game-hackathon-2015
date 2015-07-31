var platforms;
//creates world
function create(){
	//game.physics

	game.add.sprite(0, 0, 'background');
	player = game.add.sprite(game.width/2, game.height/2, 'space_ship'); 
	
	console.log(Math.random()*1+1);
	//var asteroid = new asteroid[10];
	for (var i = 0; i < 10; i++) {
		if((Math.round(Math.random()*3)+1) == 1){
			game.add.sprite(Math.round(Math.random()*game.width)+1,
				Math.round(Math.random()*game.height)+1, 'asteroid_big');			
		}else{
			game.add.sprite(Math.round(Math.random()*game.width)+1,
				Math.round(Math.random()*game.height)+1, 'asteroid_small');
		}
	};
	console.log(player);
}
	