/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 2 part 1
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 02/10/2021
   
*/
"use strict";

var a, b = 0;

//Tar emot två värden 
console.log("Sätt in första värdet: ");
a = prompt();

console.log("Sätt in andra värdet: ");
b = prompt();

//Funktionen min jämför värderna och kollar vilken som är minst. 
function min(a, b) {
	if (b < a) {
		return b;
	} else if (a === b) {
		return b;
	} else {
		return a;
	}
}

//Funktionen max jämför värderna och kollar vilken som är störst. 
function max(a, b) {
	if (a > b) {
		return a;
	} else if (a === b) {
		return a;
	} else {
		return b;
	}
}

//Skriver ut minsta och största värdet.
console.log("Största värdet är: ", max(a, b));
console.log("Minsta värdet är: ", min(a, b));