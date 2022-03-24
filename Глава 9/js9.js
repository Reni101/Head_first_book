
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
	var name =image.id;
	name = "img9/" + name +  ".jpg";
	image.src = name;
}
