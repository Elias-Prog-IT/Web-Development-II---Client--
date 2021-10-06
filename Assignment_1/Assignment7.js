/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 1 part 7
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 10/09/2021
   
*/

"use strict";

//Uppgift7
document.write('<h1>Uppgift 7!</h1>');

var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];   

var multipleArrays = [];

multipleArrays.push(names, ages, hasPet);
console.log("multipleArrays = ", multipleArrays);