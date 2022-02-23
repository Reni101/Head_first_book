var location1 = 3; // переменные для хранения каждого корабля
var location2 = 4;
var location3 = 5;
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


*/
