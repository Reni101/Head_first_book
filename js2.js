/*
var location1 = 3; // переменные для хранения каждого корабля
var location2 = 4;
*/
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1+1
var location3 = location2+1

var guess; 		// переменная для номера текущей попытки
var hits = 0;	// количество попадайний
var guesses = 0; // количество попыток
var isSunk = false; //переменная для хранения информации о том, потоплен корабль или нет



while (isSunk == false) {
	guess = prompt('Введите кординаты(0-6):');
	if (guess < 0 || guess > 6){
		alert('введи блин нужные цифры, чОрт');
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3 ){
		hits = hits + 1;
		alert("HIT!");
		if (hits == 3){
		isSunk = true;
		alert('You sank my battleship!');
}
	} else { alert("MISS");}
			}
				}
					
var stats = "You took " + guesses + " guesses to sink the battleship, " +
 "which means your shooting accuracy was " + (3/guesses);
alert(stats);




/*

if (guess == location1 ){
	hits = hits + 1;
} else if (guess == location2){
	hits = hits + 1;
} else if (guess == location3){
	hits = hits + 1;
}



if (guess == location1 || guess == location2 || guess == location3 ){
	hits = hits + 1;
}

if (hits == 3){
	isSunk = true;
	alert('You sank my battleship!');
}





var temp = 81;
var willRain = true;
var humid = (temp > 80 && willRain == true);
// humid = true

var guess = 6;
var isValid = (guess >= 0  && <=0 )
// isValid = true

var kB = 1287;
var tooBig = (kB > 1000); /true 
var urgent = true;
var sendFile = (urgent == true || tooBig == false);
// sendFile =  true == urgent 

var keyPressed = "N";
var points = 142;
var level;
if (keyPressed == "Y" ||(points > 100 && points < 200)){
	level = 2;
} else {
	level = 1;
}
// level = 2





if (price < 200 || price > 600){
	alert('price is too low or too high! Don\'t by the gadget. ')
} else {
	alert("price is right! Buy the gadget.");
}


var price = 3250

if (price >= 200 || price <= 600) {  // надо заменить || на && что бы работало коректно
	alert("price is right! Buy the gadget.");
} else{
	alert('price is too low or too high! Don\'t by the gadget. ')
}

*/
