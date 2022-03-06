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

*/

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
//Встроенные функции :  alert prompt
// Аргументы : myDog 4  guests "Earl Grey" pet
// Параметры :  dogName  age   cups  tea kind
