/*
window.onload = function() {alert("Yeah, that page loaded!");}

function vaccine(dosage) {
	if (dosage > 0) {
	inject(dosage);
	}
   }
   administer(patient, vaccine, time);

   administer(patient,
			 function(dosage){
						if (dosage > 0) {inject(dosage);
}
			},
				time
)



function makeCounter() {
	var count = 0;
 function counter() {
	count = count + 1;
	return count;
}
	return counter;
};
   var doCount = makeCounter();
   console.log(doCount());
   console.log(doCount());
   console.log(doCount());



function makePassword(password) {
	return function guess (passwordGuess) {
		return (passwordGuess === password);
	};
}

function multN(n) {
	return function mult(x) {
		return  x * n;
	};
}


function makeCounter() {
	var count = 0;
	
	return function inc() {
		count = count++;
		return count
	}

   }



var count = 0;

window.onload = function() {
	var button = document.getElementById("clickme");
	button.onclick = handleClick;
}

function handleClick() {
	var message = "You clicked me ";
	var div = document.getElementById("message");
	count++
	div.innerHTML = message + count + " times!";
}
*/

window.onload = function () {
	var count = 0;
	var message = "You clicked me ";
	var div = document.getElementById("message");

	var button = document.getElementById("clickme");
	button.onclick = function() {
		count++;
		div.innerHTML = message + count + " times!";
	};
};
