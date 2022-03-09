/*
var scores = [60,50, 60, 58, 54, 54, 58, 50, 52, 54]

//Вы можете работать с набором значений как с единым целым или же обращаться
//к отдельным значениям при необходимости

var solution2 = scores[2];
alert("solution 2 produced " + solution2 + " bubbles.")

var flavors = ["vanilla", "butterscotch", "lavender", "chocolate", "cookie dough"];
var favorOftheDay = flavors[2];

Индекс также может использоваться для изменения значений, хранящихся в массиве:

flavors[3] = "vanilla chocolate chips";

var numFlavors = flavors.length;

Теперь в numFlavors хранится
количество элементов в массиве (в данном случае 5).
Длина равна 5, потому что
массив содержит 5 элементов.


var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var last = products.lenght -1;
var recent = products[last]

Для получения индекса последнего
элемента можно использовать
длину массива, уменьшенную на 1.
При длине 4 индекс последнего элемента равен 3 (так как индексы
начинаются с нуля).



function makePharases() {
	var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
	var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
	var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
	
	var rand1 = Math.floor(Math.random() * words1.length);
	var rand2 = Math.floor(Math.random() * words2.length);
	var rand3 = Math.floor(Math.random() * words3.length);
	
	var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
	
	alert(phrase);

}

makePharases();



var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
 
 var output;
 
 var i = 0;
 while( i < scores.lenght){
	 output = "Bubble solution #" + i + " score: " + scores[i]
	 console.log(output);
	 i = i + 1;
 }
 

 
 var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
 var hasBubbleGum = [false, false, false , true ];
 var i = 0;
	
 while (i < hasBubbleGum.length ){
	 if (hasBubbleGum[i]){
	 console.log(products[i] + " contains bubble gum");
	 }
	 i = i + 1;
 }
 
 
  
  var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
  var hasBubbleGum = [false, false, false, true];
  for(var i = 0 ; i < hasBubbleGum.length ; i = i + 1 ){
	  if (hasBubbleGum[i]){
		  console.log(products[i] + " contains bubble gum");
	  }
  }
  
  var output;
for ( var i = 0; i < scores.length;  i++ ){
	output = "Bubble solution# " +i + " score: " + scores[i];
	console.log(output);
}
 */
 
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];



function printAndGetHighScore(scores) {
	var highScore = 0;
	var output;
	for (var i = 0; i < scores.length; i++) {
		output = "Bubble solution #" + i + " score: " + scores[i];
		console.log(output);
		if (scores[i] > highScore) {
	highScore = scores[i];
		}
	}
	return highScore;
 }

var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

function getBestResults(scores, highScore){
	var bestSolutions = [];
	for(var i = 0; i< scores.length; i++){
		if (scores[i] == highScore){
			bestSolutions.push(i);
		}
	}
	return bestSolutions;
}

var bestSolutions = getBestResults(scores, highScore);
 console.log("Solutions with the highest score: " + bestSolutions);
