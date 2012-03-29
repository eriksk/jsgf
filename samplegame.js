function Character(){

}
Character.prototype = {

}

var characters = [];
var height = 22;
var width = 2;
var speed = 0.08;
var map;

Game.prototype.load = function(){
	for(var i = 0; i < 100; i++){
		var e = new Entity("character.png");
		e.x = Math.random() * 500;
		e.y = Math.random() * 500;
		e.animations['idle'] = new Animation(2, 32, 32, 96, 32, 500);
		e.animations['walk'] = new Animation(3, 32, 32, 96, 32, 100);
		e.setAnim('idle');
		characters.push(e);
	}

	map = new TileMap("tiles.png", 32, 32);
	this.game.audio.load('song.wav');
	this.game.audio.playSong('song');
}

Game.prototype.update = function(dt){
	var game = this.game;

/*
	if(game.input.keyDown('39')){						
		e.x += dt * speed;
		e.flipped = false;
		e.setAnim('walk');
	}else if(game.input.keyDown('37')){				
		e.x -= dt * speed;
		e.flipped = true;
		e.setAnim('walk');
	}else{
		e.setAnim('idle');
	}
*/
	for(var i = 0; i < characters.length; i++){

		characters[i].update(dt);
	}
	map.update(dt);
}

Game.prototype.draw = function(){
	map.draw(this.ctx);	
	for(var i = 0; i < characters.length; i++){
		characters[i].draw(this.ctx);
	}
}