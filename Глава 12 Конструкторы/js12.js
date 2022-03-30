/*
function Dog (name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function() {
		if(this.weight > 25) {
			alert(this.name + " says Woof")
		} else {
			alert(this.name + " says Yip!");
		}
	};
}

function Duck (type, canFly) {
	this.type = type;
	this.canFly = canFly;
}

var fido = new Dog ("Fido", "Mixed", 38); //мы ставим ключевое слово new
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog ("Spot", "Chihuahua", 10 );

var dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
	var size = "small";
	if(dogs[i].weight > 10) {
		size = "large";
	}

	console.log ("Dog: " + dogs[i].name
				 + " is a " + size
				 + " " + dogs[i].breed);
}
for (let i = 0; i < dogs.length; i++) {
	dogs[i].bark();
}

function Widget(partNo, size) {
	 this.partNo = partNo;
	 this.size = size;
   }

function FormFactor(material, widget) {
	this.material = material;
	this.widget = widget;
	
   }

   var widgetA = new FormFactor(100, "large");
   var widgetB = new FormFactor(101, "small");
   var formFactorA = new FormFactor("plastic", widgetA);
   var formFactorB = new FormFactor("metal", widgetB);
  


   function Coffee (roast,ounces) {
	this.roast = roast;
	this.ounces = ounces;
	this.getSize = function () {
		if(this.ounces === 8) {
			return  "small";
		} else if (this.ounces === 12) {
			return  "medium"
		} else if(this.ounces === 16) {
			return  "large";
		}
	};
	this.toString = function () {
		return "You’ve ordered a " + this.getSize() + " " 
		+ this.roast + " coffee.";
	};

}

 
var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());


function Car (params) {
	this.chevy = params.chevy;			 
	this.make = params.make;
	this.model = params.model;
	this.year = params.year;
	this.color =params.color;
	this.passengers = params.passengers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = false;
	this.start = function() {
		this.started = true;
 
	};
	this.stop = function() {
		this.started = false;
	};
	this.drive = function() {
		if (this.started) {
		console.log(this.make + " " +
		this.model + " goes zoom zoom!");
		} else {
		console.log("Start the engine first.");
		}
	};			
}

var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);

var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);


var cars = [chevy, cadi, taxi, fiat, testCar];
for(var i = 0; i < cars.length; i++) {
 cars[i].start();
 cars[i].drive();
 cars[i].stop();
}

var cadiParams = {make: "GM",
 				 model: "Cadillac",
 				 year: 1955,
 				 color: "tan",
 				 passengers: 5,
 				 convertible: false,
 				 mileage: 12892};

var limoParams = {make: "Webville Motors",
				model: "limo",
 				year: 1983,
 				color: "black",
 				passengers: 12,
 				convertible: true,
 				mileage: 21120};



var limo = new Car(limoParams);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);



var cadiParams = {make: "GM", model: "Cadillac", year: 1955, color: "tan",
 				 passengers: 5, convertible: false, mileage: 12892};

 var cadi = new Car(cadiParams);

 if(cadi instanceof Car) {
	 console.log("Congrats, it's a Car!") //Оператор instanceof возвращает true, если
	 									  //объект был создан указанным конструктором.
 };

*/


 function dogCatcher(obj) {
	return (obj instanceof Dog)
 }

 function Cat(name, breed, weight) {
	 this.name = name;
	 this.breed = breed;
	 this.weight = weight;
 }

 var meow = new Cat("Meow", "Siamese", 10);
 var whiskers =  new Cat ("Whiskers", "Mixed", 12);

 var fido = {name: "Fido", breed: "Mixed", weight: 38}; 

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

var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, whiskers, fido, fluffy, spot];
	for (var i = 0; i < dogs.length; i++) {
	  if (dogCatcher(dogs[i])) {
		 console.log(dogs[i].name + " is a dog!");
 	}
}

var cadiParams = {make: "GM", model: "Cadillac",
				 year: 1955, color: "tan",
 				 passengers: 5, convertible: false,
				 mileage: 12892};
				 
var cadi = new Car(cadiParams);
