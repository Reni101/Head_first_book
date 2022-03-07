/*
var dogName = "Rover";
var dogWeight = 23'
if (dogWeight > 20){
	console.log(dogName + "says WOOF WOOF";)
} else {
	console.log(dogName + "says woof woof";)
}

dogName = "spot";
dogWeight = 13;
if(dogWeight >20) {
	console.log(dogName + "says WOOF WOOF")
} else {
	console.log(dogName + "says woof woof";)
}

dogName = "spike";
dogWeight = 53;
if (dogWeight > 20) {
 console.log(dogName + " says WOOF WOOF");
} else {
 console.log(dogName + " says woof woof");
}


dogName = "lady";
dogWeight = 17;
if (dogWeight > 20) {
 console.log(dogName + " says WOOF WOOF");
} else {
 console.log(dogName + " says woof woof");
 
 // часть кода повторяется много раз, его можено заменить. МНОГОКОДА
 
 function bark(name, weight){
	 if (weight > 20) {
 console.log(dogName + " says WOOF WOOF");
} else {
 console.log(dogName + " says woof woof");
	}
}

 
 function bark(name, weight){
	 if (weight > 20){
		 console.log(name + " says WOOF WOOF")
	 } else {
		 console.log(name + " says woof woof");
	 }
 }
 
bark("scottie", -1);
bark("dino", 0, 0); // почему работает?

 
 
 function whatShallIWear(temp){
	 if (temp < 60) {
 console.log("Wear a jacket");
}else if (temp < 70) {
 console.log("Wear a sweater");
} else {
 console.log("Wear t-shirt");
}
 }
 
 whatShallIWear(60);
 whatShallIWear(50);
 whatShallIWear(80);
 
 



function saveMyProfile(name, birthday, GPA, newuser){
	if(birthday >= 2004) {
		// для родившихся в 2004 году и позже...
	} // остальная часть функции
}

saveMyProfile("Krissy", 1991, 3.81, fa;se);
// каждый аргумент присваивается соответсвтующему параметру функции.

Переменные тоже могут передаваться как аргументы, причем этот способ применяется
даже чаще непосредственной передачи значений.
Вызов той же функции с использованием переменных:
 
var student = "krissy";
var year = 1991;
var GPA = 381/100;
var status = "existinguser"
var isNewUser = (status == "newuser");
saveMyProfile(student, year, GPA,isNewUser );


В качестве аргументов могут использоваться
даже выражения:

saveMyProfile(student, year, 381/100, status == "newuser");

В каждом случае программа сначала вычисляет выражение,
получает конкретное значение и передает его функции.



function dolt(param){
	param = 2;
}
var tes = 1;
dolt(tes);
console.log(tes);
// почему 1 ????

function dogYears(dogName, age){
	var years = age * 7;
	console.log(dogName = "is " + years + "years old");
}
var myDog = "Fido";
dogYears(myDog, 4)



function dogYears(dogName,age) {
	var years = age * 7;
	console.log(dogName = " is " + years = " years old");
}
var myDog ="Fido";
dogYears(myDog, 4);

function makeTea(cups, tea) {
	console.log("Brewing " + cups + " cups of" + tea);
}

var guests = 3;
makeTea(guests, "Earl Grey");

function secret() {
	console.log("The secret of life is 42")
}
secret();

function speak(kind) {
	var defaultSound = "";
	if (kind == "dog"){
		alert("Woof");
	} else if (kind == "cat"){
		alert("Meow");
	} else {
		alert(defaultSound);
	}
}

var pet = prompt ("Enter a type of pet:");
speak(pet);

// функции : dogYears  makeTea   secret  speak
// переменные  years myDog guests defaultSound  pet
//Встроенные функции :  alert prompt console.log
// Аргументы : myDog 4  guests "Earl Grey" pet
// Параметры :  dogName  age   cups  tea kind




function doIt(param) {
	
	param = 2;
console.log(param);
}
var tes = 1;
doIt(tes);
console.log(tes);



function bake(degrees) {
	var message;
	if(degrees > 500) {
		message = "I'm not a nuclear reactor!";
	} else if (degrees <100) {
		message = "I'm not a refrigerator!";
	} else {
		message = "That's a very comfortable temperature for me."
		setMode("bake");
		setTemp(degrees)
	}
	return message // возвращает сообщение = результат функции
}

var status = bake(350);

Если в этом примере вывести значение
status, переменная будет содержать строку
«That's a very comfortable temperature for
me». Разберитесь, как работает код,
и вы все поймете!

*/

function calculateArea(r){
	var area;
	if(r <= 0){
		return 0;
	} else{
		area = Math.PI * r * r;
		return area;
	}
}

var radius = 5.2;
var theArea = calculateArea(radius);

console.log("The area is : " + theArea);


var avatar = "genetic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;

function getAvatar(points){
	var level = points / pointsPerLevel;
	if (level == 0) {
		return "Teddy bear";
	} else if (level == 1){
		return "Cat";
	} else if (level >= 2){
		return "Godzilla";
	}
}

function updatePoints(bonus, newPoints){
	var i = 0;
	while(i < bonus){
		newPoints = newPoints = skill*bonus;
		i = i+1;
	}
	return newPoints + userPoints;
}

userPoints = updatePoints(2,100);
avatar = getAvatar(2112);

function playTurn(player, location) {
	points = 0;
	if (location == 1){
		points = points +100
	}
	return points
}

var total = playTurn("Jai", 1);
alert(points);


var x = 32
var y = 44;
var redius = 5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setup(width, height) {
	centerX = width/2
	centerY = height/2;
}

function computerDistance(x1, y1, x2, y2){
	var dx = x1-x2;
	var dy = y1 - y2;
	var d2 = (dx * dx) + (dy * dy);
	var d = Math.sqrt(d2);
	return d;
}
function circleArea(r){
	var area = Math.PI *r *r;
	return area;
}

setup(width, height);
var area = circleArea(radius);
var distance = computerDistance(x,y,centerX, centerY);
alert("Area: " + area);
alert("Distance: " + distance);

// Аргументы: width, height radius x, y, centerX, centerY
// Параметры: width, height x1, y1, x2, y2 r 
// Локальные переменные: dx dy d2 d area
// Шлобальные переменные: x y radius centerX centerY width height centerX centerY distance



