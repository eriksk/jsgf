/*********************************************
* Game
* ********************************************
*/
function Game(){
	this.width = 800;
	this.height = 600;
	this.interval = 16;
	this.canvasId = "jsgf";
	this.ctx = document.getElementById(this.canvasId).getContext("2d");
}
Game.prototype = {
	start: function(){
		Game.prototype.load.call(this);
		var me = this;
		setInterval(
			function(){
				Game.prototype.update.call(me, 16.0); //TODO: calculate delta
				Game.prototype.clear.call(me);
				Game.prototype.draw.call(me);
			}, this.interval);		
	},
	load: function(){
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
		//TODO:
		alert("drawing shits");
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
* Image
* ********************************************
*/
/*
function Image(){
}
Image.prototype = {
	position:{x:0, y:0},
	rotation:0.0,
	source:{x:0, y:0, width:0, height:0},
	name:"",
	texture: "",
	load: function(path){
		this.texture = new Texture(path);
	}
}
*/