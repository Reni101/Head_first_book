var location1 = 3; // переменные для хранения каждого корабля
var location2 = 4;
var location3 = 5;
var guess; 		// переменная для номера текущей попытки
var hits = 0;	// количество попадайний
var guesses = 0; // количество попыток
var isSunk = false; //переменная для хранения информации о том, потоплен корабль или нет

while(isSunk == false){
	guess=prompt('Введите кординаты(0-6):', ' '));
	if (guess <0 || guess > 6){
		alert('введи блин нужные цифры, чОрт');
	} else {
		guesses = guesses + 1;
	}
}