// core functions

include("audio.js");
include("content.js");
include("game.js");
include("graphics.js");
include("input.js");

function include(path){
	document.getElementByName("head").write('<script type="text/javascript" src="' + path + '"></script>');
}