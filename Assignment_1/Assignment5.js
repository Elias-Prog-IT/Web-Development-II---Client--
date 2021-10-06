/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 1 part 5
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 10/09/2021
   
*/

"use strict";

//Uppgift6

document.write('<h1>Uppgift 5!</h1>');


var countries = ["Sweden", "Denmark", "Finland", "Norway"];
var sumOfNumbers = 0;
var avgNumber = 0;

console.log("1. ", countries[1], " = ", countries[1].substring(0, 3));

//Räknar summan av antalet bokstäver i arrayen och tilldelar värdet till sumOfNumbers variabeln. 
sumOfNumbers = countries.map((e) => {
	return e.length;
}).reduce((accumulator, a) => {
	return accumulator + a;
})

console.log("Arrayens längd: ", countries.length);
console.log("Antal bokstäver i arrayen: ", sumOfNumbers);
console.log("Medelvärdet för antal bokstäver i arrayen är: ", (sumOfNumbers / countries.length))