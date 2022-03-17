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

.push() .pop() .shift() .unshift() 


if (99 == "99") {
 console.log("A number equals a string!");
} else {
 console.log("No way a number equals a string");
}

undefined == null // true

"1" == true // true

99 == "vanilla" //NaN false

*/
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

