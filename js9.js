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

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	ships: [{ locations: [0, 0, 0], hits: ["", "", ""] },
			{ locations: [0, 0, 0], hits: ["", "", ""] },
			{ locations: [0, 0, 0], hits: ["", "", ""] }],

// выстрел
	fire: function(guess) {
	for(var i = 0; i < this.numShips; i++){
		var ship = this.ships[i];
		var index = ship.locations.indexOf(guess);
		if(index >= 0) {
			ship.hits[index] = "hit";
			view.displayHit(guess);
			view.displayMessage("HIT!");
			if(this.isSunk(ship)) {
				view.displayMessage("You sank my battleship!");
				this.shipsSunk++;
			}
			return true;
			
		}
	}
		retu	rn false;
	},
	// проверка на потопление
	isSunk: function(ship) {
	for(var i =0; i < this.shipLength; i++) {
		if(ship.hits[i] !== "hit"){
			return false;
		}
	}
	return true;
	},
	
	// создает корабли
	generateShipLocations: function() {
	var locations;
	for(var i = 0;i < this.numShips; i++) {
		do{
			locations = this.generateShip();
		} while(this.collision(locations));
		this.ships[i].locations = locations;
	}
	},
	
	//создает массив со случайными позициями корабля
	generateShip: function() {
		var direction = Math.floor(Math.random() *2);
		var row, col;
		if(direction === 1) {
			//горизонтально
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() *(this.boardSize - this.shipLength));
		} else {
			// вертикально
			row = Math.floor(Math.random() * (this.boardSize- this.shipLength));
			col = Math.floor(Math.random() *this.boardSize);
		}
		var newShipLocations = [];
			for (var i = 0; i < this.shipLength; i++) {
			if(direction === 1){
				newShipLocations.push(row + "" + (col + i));
			}else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
	return newShipLocations;
	},
	
	//получает данные корабля и проверяет, перекрывается ликлетка с клетками других кораблей
	collision: function(locations){
		for(var i =0; i < this.numShips; i++){
			var ship = model.ships[i];
			for(var j = 0; j < locations.length; j++){
				if(ship.locations.indexOf(locations[j]) >= 0){
					return true;
				}
			}
		}
		return false;
	}
	

};


var controller = {
	guesses: 0,
	processGuess: function(guess) {
	var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips){
				view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");

			}
		}
	}
};
	
function parseGuess(guess){
		var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
		if (guess === null || guess.length !== 2) {
			alert("Oops, please enter a letter and a number on the board.");
		}else {
			firstChar = guess.charAt(0);
			var row = alphabet.indexOf(firstChar);
			var column = guess.charAt(1);
			
			if(isNaN(row) || isNaN(column)) {
				alert("Oops, that isn't on the board.");
			} else if(row < 0 || row > model.boardSize ||
					  column >= model.boardSize) {
						  alert("Oops, that's off the board!");
			} else {
				return row + column;
			}

		} return null;
	}
		
	
function init() {
	var fireButton = document.getElementById("fireButton");
		fireButton.onclick = handleFireButton;                  //Кнопке можно назначить обработчик события нажатия — функцию handleFireButton.
	var guessInput = document.getElementById("guessInput");
		guessInput.onkeypress = handleKeyPress;
		
		model.generateShipLocations();
	}
	
function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;  //извлекаем данные, введенные пользователем. Координаты хранятся в свойстве value элемента input.
		controller.processGuess(guess);
		
		guessInput.value = "";
	};
	window.onload = init;
	
function handleKeyPress(e) {
var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
	fireButton.click();
	return false;
	}
}
	
	


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

	
		
		
		
/* 
Метод получает координаты выстрела. Затем мы перебираем массив
ships, последовательно проверяя каждый корабль.
Здесь мы получаем объект корабля. Необходимо проверить, совпадают ли
координаты выстрела с координатами одной из занимаемых им клеток.
*/

	/*
console.log(parseGuess("A0"));
console.log(parseGuess("B6"));
console.log(parseGuess("G3"));
console.log(parseGuess("H0"));
console.log(parseGuess("A7"));

 
controller.processGuess("A0");
controller.processGuess("A6");
controller.processGuess("B6");
controller.processGuess("C6");
controller.processGuess("C4");
controller.processGuess("D4");
controller.processGuess("E4");
controller.processGuess("B0");
controller.processGuess("B1");
controller.processGuess("B2");

 */
