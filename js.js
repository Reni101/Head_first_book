 setTimeout(wakeUpuser, 5000);
function wakeUpuser() {
	alert('Are you going to stare');
}


var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
var name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};




var name;
function greet_abe() {
  name = 'Abe';
  return "Hello, " + name + '!';
};

function greet_ben() {
  name = 'Ben'; 
  return "Hello, " + name + '!';
};

var price = 28.99;
var discount = 10;
var total = price - (price * (discount/100));
if( total >25) {
	freeShipping();
}
// присвоить price 28.99 присвоить dicount 10 присвоить рещультату уравнение и если ответ будет 
// > 25 то запустить функцию freeShipping();

var count = 10;
while(count > 0) {
	juggle();
	count = count -1
}

// присвоить count 10 запустить цикл если count >10 то запустить функцию juggle от counta -1, 
//повторить цикл

var  dog = {name: "Rover", weight: 35};
if (dog.weight > 30) {
	alert("WOOF WOOF");
} else {
	alert("woof woof");
}
// присвоить переменно dog с атрибутами name и weight если вес собаки > 30 то сказать WOOF WOOF
// если fals то сказать woof woof

var circleRadius = 20;
var circleArea =
 Math.PI * (circleRadius * circleRadius);

// присовить переменной circleRadius  значение радиус 20
// Math.PI математически число пи и 10 цифр после запятой
// circleArea будет равен числу Пи умноженному на радиус в квдрате



//                     myHomeWork

var temp = 10;
var temp =(9 / 5) * temp + 32
alert(temp);
// 50


var color = "orange"; // var color = "pink";
if (color == "orange") {
	alert("оранжевый");
} else (alert('неоранжевый'))

var yourLevel = 7 //var yourLevel = 2 var yourLevel = 5
if (yourLevel > 5) {
	alert(true);
}else alert(false);



var level = 5;
var points = 30000;
var bonus = 3300;
var result;
result = (level* points) + bonus;
alert (result);

var color = 'pink';
 if (color != "orange") { // то есть розовый не равено ораньжевому!
	 alert(true);
 }else alert(false);


var text = 1000 + '108';
alert (text);
//// циклы

var scoops = 5;
while (scoops > 0) {
 document.write("Another scoop!<br>");
 scoops = scoops - 1;
}
document.write("Life without ice cream isn't the same");


var scoops = 5;
if (scoops >=5) {
	alert("Eat faster, the ice cream is going to melt!")
} else if (scoops <3){
	alert("Ice cream is running low!");
}


if (scoops >= 5){
	alert("Eat faster, the ice cream is going to melt!");
}else if (scoops == 3){
	alert("Ice cream is running low!");
}else if ( scoops == 2){
	alert("Going once");
}else if (scoops == 1){
	alert("Going twice!");
}else if (scoops == 0){
	alert("Gone!");
}else {
	alert("still lots of ice cream left, come and get it.");
}


var i = 0;
var name = "Joe";

while (i < 2) {
	document.write("Happy Birthday to you.<br>");
	i = i + 1;
} document.write("Happy Birthday dear " + name + ",<br>");
  document.write("Happy Birthday to you.<br>");

Близкое знакомство с console.log
  
  
  var messaage = "Howdy " + "partner";
  console.log(messaage);
  
  */
  
  
	var word = "bottles";
	var count = 5;
	while (count > 0) {
		console.log(count + " " + word + " of beer on the wall");
		console.log(count + " " + word + " of beer,");
		console.log("Take one down, pass it around,");
		count = count - 1;
	if (count > 0) {
		console.log(count + " " + word + " of beer on the wall.");
 } else {
		console.log("No more " + word + " of beer on the wall.");
 }
}
