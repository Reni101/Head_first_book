
//window.onload = pageLoaded;

window.onload = init;
function init(){
	var image = document.getElementsByTagName('img')
	for(var i = 0; i< images.length; i++) {
		image.[i].onclick = showAnswer;
	}
}

function showAnswer(eventObj) {
	var image = eventObj.target; //Свойство target сообщает, какой элемент сгенерировал данное событие. 
	
}
