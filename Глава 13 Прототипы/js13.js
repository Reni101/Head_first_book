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

fido.bark();


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

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
spot.bark();

*/

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
