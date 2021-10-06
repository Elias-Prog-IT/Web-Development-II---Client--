/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 1 part 4
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 10/09/2021
   
*/

"use strict";

//Uppgift4

document.write('<h1>Uppgift 4!</h1>');

var numbers = [128, 256, 512, 1024, 2048]; //arrayen
//var numbers = [128, 256, 512, 1024, 2048, 4096]; // nya arrayen

var sumOfNumbers = 0;
var avgNumber = 5;
var avgNumber2 = 0;

for (var i in numbers) {
	sumOfNumbers += numbers[i];
	avgNumber2++;
}

console.log("1. Summan av alla siffrorna i arrayen numbers är: ", sumOfNumbers);
console.log("2. Medelvärdet av summan i arrayen vars värde är medelvärdet av alla siffrorna i arrayen utan ändring: ", sumOfNumbers / avgNumber);
console.log("3. Medelvärdet av summan i arrayen efter att ha ändrat storleken på arrayen: ", sumOfNumbers / avgNumber2);