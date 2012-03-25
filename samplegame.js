function Character(){

}
Character.prototype = {

}

var e;
var height = 22;
var width = 2;
var speed = 0.08;
var map;

Game.prototype.load = function(){
	e = new Entity("character.png");
	e.y = 400;
	e.animations['idle'] = new Animation(2, 32, 32, 96, 32, 500);
	e.animations['walk'] = new Animation(3, 32, 32, 96, 32, 100);
	e.setAnim('idle');

	map = new TileMap("tiles.png", 32, 32);
	//this.game.audio.load('explosion.wav');
	//this.game.audio.play('explosion');
}

Game.prototype.update = function(dt){
	var game = this.game;

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

	e.update(dt);
	map.update(dt);
}

Game.prototype.draw = function(){
	map.draw(this.ctx);
	e.draw(this.ctx);
}