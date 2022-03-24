
//window.onload = pageLoaded;

window.onload = init;
function init(){
	var images = document.getElementsByTagName("img");
 		for (var i = 0; i < images.length; i++) {
 		images[i].onclick = showAnswer;
 }
}

function showAnswer(eventObj) {
	var image = eventObj.target; //Свойство target сообщает, какой элемент сгенерировал данное событие. 
	var name = image.id;
	name = "img9/" + name +  ".jpg";
	image.src = name;
	setTimeout(reblur, 2000, image);
}

function reblur(image){
	var name = image.id;
	name = "img9/" + name + "blur.jpg";
	image.src = name;
}
/*
window.onload = init;

function init(){
	var map = document.getElementById('map')
	map.onmousemove = showCoord; // map.onclick = showCoord;
}

function showCoord(eventObj){
	var map = document.getElementById('coords');
	var x =eventObj.clientX;
	var y =eventObj.clientY;
	map.innerHTML = "Map coordinates: "+ x + ", " + y;

}



function timerhandLer(){
	alert('Hey what are you doing just sitting there staring at a blank screen?')
}

setTimeout(timerhandLer, 3000);
*/
