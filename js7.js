/*
var subject = "Just a string";
console.log(typeof subject);

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"};
var test10 = null;


console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);

if (isNaN(myNum)) {
 myNum = 0;
}

Функция isNaN возвращает true, если переданное ей значение не является числом.

.push() .pop() .shift() .unshift()  indexOf charAt length substring split


if (99 == "99") {
 console.log("A number equals a string!");
} else {
 console.log("No way a number equals a string");
}

undefined == null // true

"1" == true // true

99 == "vanilla" //NaN false


var lot = [chevy, taxi, fiat1, fiat2];

function findCarInLot(car) {
		for (var i = 0; i < lot.length; i++) {
		if (car === lot[i]) {
			
		return i;
		}
	}

}
var chevy = {
	make: "Chevy",
	model: "Bel Air"
};
var taxi = {
	make: "Webville Motors",
	model: "Taxi"
};
var fiat1 = {
	make: "Fiat",
	model: "500"
};
var fiat2 = {
	make: "Fiat",
	model: "500"
};

var loc1 = findCarInLot(fiat2); //3
var loc2 = findCarInLot(taxi); //1
var loc3 = findCarInLot(chevy);//0
var loc4 = findCarInLot(fiat1); // 2

undefined
null
0
пустая строка
NaN псевдоложные

var element = document.getElementById("elementThatDoesExist");
if (element) {
 // Это тоже
}

*/
/*
function lieDetectorTest() { 
	var lies = 0;
	
	var stolenDiamond = { };
	if (stolenDiamond) { // true
		console.log("You stole the diamond");
		lies++;
 }
	var car = {
		keysInPocket: null // false
 };
 	if (car.keysInPocket) { 
		console.log("Uh oh, guess you stole the car!");
		lies++;
 }
 
	if (car.emptyGasTank) { // false
		console.log("You drove the car after you stole it!");
		lies++;
 }
 
	var foundYouAtTheCrimeScene = [ ];
	if (foundYouAtTheCrimeScene) { // true
		console.log("A sure sign of guilt");
		lies++;
 }
 	if (foundYouAtTheCrimeScene[0]) { // false //true +
		console.log("Caught with a stolen item!");
		lies++;
 }
 
	var yourName = " ";
	if (yourName) { //false
		console.log("Guess you lied about your name");
		lies++;
 }
 
 return lies;
}


	var numberOfLies = lieDetectorTest();
		console.log("You told " + numberOfLies + " lies!");
	if (numberOfLies >= 3) {
	console.log("Guilty as charged");
}


isNaN Функция isNaN возвращает true, если переданное ей значение не является числом

toLowerCase Возвращает строку,в которой все символы верхнего регистра преобразуются к нижнему регистру.

slice Возвращает новую строку, из которой удалена часть исходной строки.

replace Находит подстроки и заменяет их другой строкой.

lastIndexOf Аналогичен indexOf,но находит последнее вхождение (вместо первого).

substring Возвращает часть строки


match Ищет совпадения регулярного выражения в строке.


toUpperCase Возвращает строку, в которой все символы нижнего регистра преобразуются к верхнему регистру.

concat Соединяет строки


trim Удаляет пропуски с обоих концов строки. Метод удобен при обработке данных, вводимых пользователем.




//undefined == null  true


var phrase = "the cat in the hat";
index = phrase.indexOf("the", 5);
console.log("there's a the sitting at index " + index);


 var input = "jenny@wickedlysmart.com";
  for(var i = 0; i < input.length; i++) {
  if (input.charAt(i) === "@") {
	console.log("There's an @ sign at index " + i);
  }
  }
  
   Функция isNaN возвращает true, если переданное ей значение не является числом.
  var numb = "ok"
  console.log (isNaN(numb));
  
   
  
  function validate1(phoneNumber) {
	  if(phoneNumber.length !== 8) {
		  return false;
	  }
	  for (var i = 0; i< phoneNumber.length; i++) {
		  if(i === 3){
			  if (phoneNumber.charAt(i) !== "-") {
				  return false;
			  }
		  } else if(isNaN(phoneNumber.charAt(i))) {
			  return false;
		  }
	  } return true;
  }
  
  function validate2(phoneNumber) {
	  if(phoneNumber.length !== 8){
		  return false;
	  }
	var first = phoneNumber.substring(0,3);
	var second = phoneNumber.substring(4);
	if(phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
		return false;
	}
	return true;
  }
 
 
 function validate3(phoneNumber) {
	 if (phoneNumber.length > 8 || phoneNumber.length < 7) {
		 return false;
	 }
	 for(var = i; i < phoneNumber.length; i++){
		 if(i === 3){
			 if(phoneNumber.length === 8 && phoneNumber.charAt(i) !== "-") {
				 return false;
			 } else if(phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
				 return false;
			 }
		 }
	 } return true;
 }
 
 function validate(phoneNumber){
	 if(phoneNumber.length > 8 ||
		phoneNumber.length < 7) {
			return false;
		}
	var first = phoneNumber.substring(0,3);
	var second = phoneNumber.substring(phoneNumber.length - 4);
	
	if(isNaN(first) || isNaN(second)) {
		return false;
	}
	if(phoneNumber.length === 8) {
		return(phoneNumber.charAt(3) === "3")
	} return true;
 }
 
 */
 function Duck(sound) {
	this.sound = sound;
	this.quack = function() {console.log(this.sound);}
}
	var toy = new Duck("quack quack");
	
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);
