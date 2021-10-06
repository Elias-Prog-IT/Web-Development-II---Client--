/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 1 part 3
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 10/09/2021
   
*/

"use strict";

//Uppgift3
document.write('<h1>Uppgift 3!</h1>');
document.write("Kombinera sträng-metoderna .substring(), .toLowerCase() och .toUpperCase() för att skriva ut följande delar av dessa strängar:", "<br> 1. Skriv ut 'LEARNING' av 'It's Learning'", "<br> 2. Skriv ut 'good parts' av 'JavaScript: The Good Parts'<br>");

const str1 = "It's Learning";
const str2 = "JavaScript: The Good Parts";

console.log("1. ", str1, " = ", str1.substring(5, 13).toUpperCase());
console.log("2. ", str2, " = ", str2.substring(16, 26).toLowerCase());