
//window.onload = pageLoaded;

window.onload = init;
function init(){
	var image = document.getElementById('zero');
	image.onclick = showAnswer; 
}

function showAnswer() {
	var image = document.getElementById('zero');
	image.src = "img9/zero.jpg";
}