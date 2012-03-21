/**
* 
*/
function Graphics(){

	function draw(image){		
		//TODO:
	}
}

function Texture(path){
	this.width;
	this.height;
}

function Image(){
	this.position = {x:0, y:0};
	this.rotation = 0.0;
	this.source = {x:0, y:0, width:0, height:0};
	this.name = "";
	this.texture;

	function load(path){
		this.texture = new Texture(path);
	}
}