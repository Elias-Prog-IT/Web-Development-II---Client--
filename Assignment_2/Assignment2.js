/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 2 part 2
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 02/10/2021
   
*/
"use strict";


var endPoint = 0; 

//Tar emot ett värde från användaren.
console.log("Sätt in ett värde: ");
endPoint = prompt();

//Funktionen range tar in variabeln endpoint i parametern och sedan så körs for-loopen från värdet
//noll upp till variabelns endpoints värde. Varje loop som for-loopen kör så ökar den storleken på arrayen.
function range(endPoint){
var arr = [];
for (var i = 0; i < endPoint; i++)
{
    arr.push(i);
}

return arr;
}
//Skriver ut storleken
console.log(range(endPoint));

//test versionen utan input.
var testArray = range(10);
console.log(testArray);