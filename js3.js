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

 */
 
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
