/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 1 part 9
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 10/09/2021
   
*/
"use strict";

//Uppgift9
document.write('<h1>Uppgift 9!</h1>');

var amount = ''; 

console.log("Skriv in ett värde!");
amount = prompt();

   if (amount < 50) {
    console.log("Less then 50!");
       
   } else if ( amount >= 50 && amount <= 65 )
   {
    console.log("Optimal range for the amount!");
   }
   else 
   {
    console.log("Too much!");
   }

