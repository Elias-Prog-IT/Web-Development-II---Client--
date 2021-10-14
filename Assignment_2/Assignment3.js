/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 2 part 3
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 02/10/2021
   
*/
"use strict";

//Array med fem värden
var numbers = [5, 10, 15, 20, 25];

var n = 0;
//funktionen ökar värdet på 'n' tills den når alla värden på arrayen. 
function sum(numbers)
{
    for (var i in numbers) {
        n += numbers[i];
    }
    return n;
}

var sumOfNumbers = sum(numbers);
//Skriver ut summan 
console.log("the sum is: ", sumOfNumbers);