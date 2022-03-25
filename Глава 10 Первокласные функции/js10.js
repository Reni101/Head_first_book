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
*/
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