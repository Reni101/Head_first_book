/*
var migrating = true;
var fly = function(num) {
 for (var i = 0; i < num; i++) {
 console.log("Flying!");
 }
};
function quack(num) {
 for (var i = 0; i < num; i++) {
 console.log("Quack!");
 }
}
if (migrating) {
 quack(4);
 fly(4);
}

var winner = function() { alert("WINNER!") };
var loser = function() { alert("LOSER!") };



var a = winner;
var b = loser;
var c = loser;


// Проверяем удачу в игре “наперстки”
c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();





function checkNoFlyList(passenger){
	if(passenger.name === "Dr. Evel" ) {
		return true;
	} else {
		return false; //пассажир не входит в «черный список»
	}
};

function chekNotPaid(passenger) {
	if(!passenger.paid){ //Если билет не оплачен, возвращаем true.
		return true;
	} else{
		return false;
	}
}

function processPassengers(passenger, testFunction) {
	for (var i = 0; i < passenger.length; i++){
		if(testFunction(passenger[i])){
			return false;
		}
	} return true;
}
var allCanFly = processPassengers(passengers,checkNoFlyList);
if (!allCanFly){
	console.log("The plane can't take off: we have a passenger on the no-fly-list.")
};

var allPaid = processPassengers(passengers, chekNotPaid);
if(!allPaid){
	console.log("The plane can't take off: not everyone has paid.");
};

function printPassenger(passenger){
	var  message = passenger.name;
	if (passenger.paid === true) {
		message = message + " has paid";
	} else {
		message = message +" has not paid";
	}
	console.log(message);
};

processPassengers(passengers, printPassenger);




var passengers = [  { name: "Jane Doloop", paid: true, ticket: "coach" },
 					{ name: "Dr. Evel", paid: true, ticket: "firstclass" },
 					{ name: "Sue Property", paid: false, ticket: "firstclass" },
 					{ name: "John Funcall", paid: true, ticket: "coach" } ];



function createDrinkOrder(passenger) {
	var orderFunction;
	if(passenger.ticket === "firstclass") {
		orderFunction = function() {
			console.log("Would you like a cocktail or wine?");
};
	} else { 
		orderFunction = function() {
			console.log("Your choice is cola or water.");
			};
	}
	return orderFunction;
}


function serveCustomer(passenger) {
	var getDrinkOrderFunction = createDrinkOrder(passenger);
	getDrinkOrderFunction();
	// Предложить обед
	getDrinkOrderFunction();
	getDrinkOrderFunction();
	// Включить кино
	getDrinkOrderFunction();
	// Забрать мусор

}

function servePassengers(passenger) {
	for (var i = 0; i < passenger.length; i++) {
		serveCustomer(passenger[i]);
	}
}

servePassengers(passengers);

*/

var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
 { name: "Orange", calories: 160, color: "orange", sold: 12101 },
 { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
 { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
 { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
 { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
 { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
 { name: "Water", calories: 0, color: "clear", sold: 62123 }
 ];
