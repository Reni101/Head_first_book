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
