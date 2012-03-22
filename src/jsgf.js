/*********************************************
* Game
* ********************************************
*/
function Game(){
	this.width = 800;
	this.height = 600;
	this.interval = 60;
	this.canvasId = "jsgf";
	this.ctx = document.getElementById(this.canvasId).getContext("2d");
	this.input = new Input();
}
Game.prototype = {
	start: function(){
		var me = this;
		Game.prototype.load.call(me);
		setInterval(
			function(){
				Game.prototype.update.call(me, 16.0); //TODO: calculate delta
				Game.prototype.updateInternal.call(me, 16.0);
				Game.prototype.clear.call(me);
				Game.prototype.draw.call(me);
			}, this.interval);		
	},
	load: function(){
	},
	updateInternal: function(dt){
		this.input.update();
	},
	update: function(dt){
	},
	clear: function(){
		this.ctx.clearRect(0, 0, this.width, this.height);
	},
	draw: function(){
	}
};

/*********************************************
* Graphics
* ********************************************
*/
function Graphics(){
}
Graphics.prototype = { 
	draw: function(image){		
	}
}

/*********************************************
* Texture
* ********************************************
*/
function Texture(path){
}
Texture.prototype = {
	width:0,
	height:0
}

/*********************************************
* Entity
* ********************************************
*/
function Entity(texture){
	this.img = new Image();
	this.img.onload = function(){};
	this.img.src = texture;

	this.x = 0;
	this.y = 0;
	this.rotation = 0.0;
	this.source = {x:0, y:0, width:this.img.width, height:this.img.height};
	this.flipped = false;
}
Entity.prototype = {
	draw: function(ctx){
		ctx.drawImage(this.img, 
			this.source.x, this.source.y, 
			this.source.width, this.source.height,
			this.x, this.y, 
			this.source.width, this.source.height);
	}
}

/*********************************************
* Input
* ********************************************
*/
function Input(){
	this.keys = {};
	var k = this.keys;
	window.onkeypress = function(code){
		k[code.keyCode] = true;
	};
	window.onkeyup = function(code){
		k[code.keyCode] = false;
	};
}
Input.prototype = {
	update: function(){
	},
	keyDown: function(code){
		return this.keys[code];
	}
}