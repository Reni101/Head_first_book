
var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
},
	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
},
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
 }
};
/*
view.displayHit("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("65");
view.displayMessage("Tap tap, is this thing on?");



var ship1 = {
	locations: ["10", "20", "30"],
	hits: ["", "", ""]
};
var ship2 = {
	locations: ["32", "33", "34"],
	hits: ["", "", ""]
};
var shipe3 = {
	locations: ["63", "64", "65"],
	hits: ["", "", "hit"]
};


var ships = [{ locations: ["10", "20", "30"], hits: ["", "", ""] },
			 { locations: ["32", "33", "34"], hits: ["", "", ""] },
			 { locations: ["63", "64", "65"], hits: ["", "", "hit"] }];
			 

var ship2 = ships[1];
var locations = ship2.locations;
console.log("Location is " + locations[1]);

var ship3 = ships[2];
var hits = ship3.hits;
if (hits[0] === "hit") {
 console.log("Ouch, hit on third ship at location one");
}


var ship1 = ships[0];
var hits = ship1.locations;
hits[2] = hit;
*/

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
			{ locations: ["24", "34", "44"], hits: ["", "", ""] },
			{ locations: ["10", "11", "12"], hits: ["", "", ""] }]

// выстрел
	fire: function(guess) {
	for(var i = 0; i < this.numShips; i++){
		var ship = this.ships[i];
		var index = ship.locations.indexOf(guess);
		if(index >= 0) {
			ship.hits[index] = "hit";
			if(this.isSunk(ship)) {
				this.shipsSunk++;
			}
			return true;
			
		}
	}
		return false;
	};
	// проверка на потопление
	isSunk: function(ship) {
	for(var i =0; i < this.shipLength; i++) {
		if(ship.hits[i] !== "hit"){
			return false;
		}
	}
	return true;
	};
};
/* 
Метод получает координаты выстрела. Затем мы перебираем массив
ships, последовательно проверяя каждый корабль.
Здесь мы получаем объект корабля. Необходимо проверить, совпадают ли
координаты выстрела с координатами одной из занимаемых им клеток.
*/

