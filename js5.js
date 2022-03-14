/*
var chevy = {
make: "Chevy",
model: "Bel Air",
year: 1957,
color: "red",
passengers: 2,
convertible: false,
mileage: 1021
}

var cadi {
	make:"Cadillac",
	model: "GM",
	year: 1955,
	color: "tan",
	passemgers: 5,
	convertible: false,
	mileage:12892,
}

var widget = {                   
 cost$: 3.14,
 "on sale": true
 };
 Если строка, используемая как имя
свойства, содержит пробелы, ее
необходимо заключить в кавычки

Объект не может содержать два свойства с одинаковыми именами
После значения последнего свойства запятая не ставит

var fiat = {
 make: "Fiat",
 model: "500",
 year: 1957,
 color: "Medium Blue",
 passengers: 2,
 convertible: false,
 mileage: 88000
};

fiat.mileage

var miles = fiat.mileage;
if(miles< 2000){
	buyIt();
}

Точечная запись.
● Точечная запись (.)
открывает доступ
к свойствам объекта.
● Например, fiat.color —
свойство объекта
fiat с именем color
и значением «Medium
Blue».

fiat.mileage = 10000;
Объект можно в любой момент дополнить новыми свойствами. Для этого достаточно
указать новое свойство и присвоить ему значение. Допустим, мы
хотим добавить булевское свойство, которое сообщает, пора ли
помыть «Фиат»:
fiat.needsWashing = true;



var dog ={
	name: "Fido",
	weight: 20.2,
	age: 4,
	breed: "mixed",
	activity: "fetch balls"
}
var bark
if (dog.weight > 20){
	bark = "WOOF WOOF";
} else {
	bark = "woof wooof";
}

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);


fido.dogYears = 35;
delete fido.dogYears;



var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341
}

var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892
};

var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000
	
};

var chevy = {
	make: "Chevy",
	model: "Bek Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021
}

function prequal(car){
	if(car.mileage > 10000){
		return false;
	} else if ( car.year > 1960){
		return false;
	} return true;
};


var worthALook = prequal(chevy);

if(worthALook){
	console.log ("you gotta check out this" + taxi.make + " " + taxi.model)
} else {
	console.log("you should really pass ont the" +taxi.make + " " + taxi.model)
}




function getSecret(file, secretPassword){
	file.opened = file.opened + 1;
	if(secretPassword == file.password){
		return file.contents.;
	} else {
		return "invalid password! No secret for you.";
	}
}

function setSecret(file, secretPassword, secret){
	if (secretPassword == file.password){
		file.opened = 0;
		file.contents = secret;
	}
}

var superSecretFile = {
 level: "classified",
 opened: 0,
 password: 2,
 contents: "Dr. Evel's next meeting is in Detroit."


var secret = getSecret(superSecretFile,superSecretFile.password)
console.log(secret);


setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);



function makeCar(){
	var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
	var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
	var years = [1955, 1957, 1948, 1954, 1961];
	var colors = ["red", "blue", "tan", "yellow", "white"];
	var convertible = [true, false];


var rand1 = Math.floor(Math.random() * makes.length);
var rand2 = Math.floor(Math.random() * models.length);
var rand3 = Math.floor(Math.random() * years.length);
var rand4 = Math.floor(Math.random() * colors.length);
var rand5 = Math.floor(Math.random() * 5) + 1;
var rand6 = Math.floor(Math.random() * 2);

var car = {
	make: makes[rand1],
	model: models[rand2],
	year: years[rand3],
	color: colors[rand4],
	passengers: rand5,
	convertible: convertible[rand6],
	mileage: 0
}
return car;

}

function displayCar(car){
	console.log("Your new car is a " + car.year+ " " + + car.make + " " + car.model);
}

var carToSeall = makeCar();
displayCar(carToSeall);

Сначала мы вызываем функцию makeCar и присваиваем возвращаемое ей значение переменной carToSell. Затем объект,
возвращенный makeCar, передается функции displayCar,
которая просто выводит значения некоторых его свойств
на консоль.



var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	
	start: function(){
		this.started = true;
	},
	
	stop: function(){
		this.started = false;
	},
	
	drive: function() {
		if (this.started) { // fiat.started)
			alert("Zoom zoom!");
		} else {
			alert("You need to start the engine first.");
 }
	}
	
	};
	
	fiat.drive();
	fiat.start();
	fiat.drive();
	fiat.stop();
*/	
	
var song = {
	name: "Walk This Way",
	artist: "Run-D.M.C.",
	minutes: 4,
	seconds: 3,
	genre: "80s",
	playing: false,
	play: function() {
		if (!this.playing) {
			this.playing = true;
			console.log("Playing " + name + " by " + this.artist);
 }
 
 },
	pause: function() {
		if (this.playing) {
		this.playing = false;
	}
 }
};
	
	song.pause();
	song.play();
