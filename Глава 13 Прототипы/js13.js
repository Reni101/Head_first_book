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
*/

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