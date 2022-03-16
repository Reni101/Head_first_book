/*
var acces =
	document.getElementById('code9');
var code = acces.innerHTML;
code = code + " midnight";
alert(code);

 	
function init() {
 var planet = document.getElementById("greenplanet");
 planet.innerHTML = "Red Alert: hit by phaser fire!";
}
window.onload = init;

	







function addSongs(){
	var song1 = document.getElementById("song1");
	var song2 = document.getElementById("song2");
	var song3 = document.getElementById("song3");
	
	song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
	song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
	song3.innerHTML = "I Code the Line, by Johnny JavaScript";
}
	window.onload = addSongs;

	
var planet = document.getElementById("greenplanet"); 
planet.innerHTML = "Red Alert: hit by phaser fire!!!!";
console.log(planet.innerHTML);


planet.setAttribute("class", "redtext")

//Используем метод setAttribute для добавления нового или изменения существующего атрибута.


var scoop = document.getElementById("raspberry");
var alignText = scoop.getAttribute('align');
console.log("I can't see the image in the console,");
console.log(" but I'm told it looks like: " + alignText);

var scoop = document.getElementById("raspberry")
var altText = scoop.getAttribute("alt");
if(altText == null){
	console.log("Oh, I guess there isn't an alt attribute.");
}else {
	console.log("I can't see the image in the console,");
	console.log(" but I'm told it looks like: " + altText);
}

*/
function init() {
	var planet = document.getElementById("greenplanet");
		planet.innerHTML = "Red Alert: hit by phaser fire!";
		planet.setAttribute("class", "redtext");
 }
	window.onload = init;
