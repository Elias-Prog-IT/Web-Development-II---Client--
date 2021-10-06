/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 1 part 10
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 10/09/2021
   
*/
"use strict";

//Uppgift10

document.write('<h1>Uppgift 10!</h1>');


var k = 8;
var string = "";

for (let i = 1; i <= k; i++) {
	for (let j = 0; j < i; j++) {
		string += "#";
	}
	string += "\n";
}

console.log(string);