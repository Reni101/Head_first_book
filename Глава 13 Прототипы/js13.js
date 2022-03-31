
/*

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function() {
	if (this.weight > 25) {
	alert(this.name + " says Woof!");
	} else {
	alert(this.name + " says Yip!");
	}
	};
}


var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);




function Dog(name, breed, weight) {
		this.name = name;
		this.breed = breed;
		this.weight = weight;
   }

Dog.prototype.species = "Canine";

Dog.prototype.bark = function() {
	if(this.weight > 25) {
		console.log(this.name + " says WOOF!")
	} else {
		console.log(this.name + " says Yip!")
	}
};
Dog.prototype.run = function () {
	console.log("Run!");
};
Dog.prototype.wag = function() {
	console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
spot.bark = function () {
	console.log(this.name + " says hihi!");
}

var barnaby = new Dog("Barnaby", "Basset Hound", 55);
Dog.prototype.sitting = false;
Dog.prototype.sit = function() {
	if(this.sitting) {
		console.log(this.name + " is already sitting");
	} else {
		this.sitting = true;
		console.log(this.name + " in now sitting")
	}
};

Dog.prototype.getdUp = function() {
	if(this.sitting) {
		this.sitting = false
		console.log("get up")
	} else {
		console.log("allredy get up")
	}
};

spot.sitting = true;




function Robot (name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function() {
	 // code to speak
	 console.log("Hi, my name is " + this.name);
}
Robot.prototype.makeCoffee = function() {
	// make coffee
	console.log("do you want a coffe")
}
Robot.prototype.blinkLights = function() {
	//blink lights
	console.log("bi bi")
}

var robby = new Robot ("Robby", 1956,"Dr. Morbius");
var rosie = new Robot("Rosie",1962, "George Jetson");

robby.onOffSwitch = function() {
	console.log("switch on/off ")
};

robby.makeCoffee = function () {
	console.log("I can't do a coffe");
};

rosie.cleanHouse = function() {
	console.log("Essay cleaning house");
};

console.log(robby.name + " was made by " + robby.maker +
 " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker +
 " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();





function Game() {
	this.level = 0;
}

Game.prototype.play = function () {
	this.level++
	console.log("Wlcome to level" +this.level);
	this.unlock();	
};

Game.prototype.unlock = function() {
	if(this.level == 42){
		Robot.prototype.deployLaser = function () {
		console.log(this.name + 
			" is blasting you with laser beams.")
		}
	};
}

function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

var game = new Game();
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

while (game.level < 42) {
	game.play();
   }

robby.deployLaser();
rosie.deployLaser();

//Секрет этой игры: при достижении
//уровня 42 в прототип добавляется
//новый метод. Это означает, что
//все роботы наследуют способность
//применения лазеров!
*/


function Robot(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function () {
	console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function () {
	this.errorMessage = "I appear to have a short circuit!";
};

var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.spillWater();
rosie.reportError();
robby.reportError();

console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));
