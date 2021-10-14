/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 2 part 5
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 02/10/2021
   
*/

"use strict";

//Funktion som kollar upp om en sträng är det samma som den är baklänges.
const checkIfPalindrome = (example) => {
    return example == example.toLowerCase().split("").reverse().join("");
}

//Skriver ut 8 exempel för att prova om funktionen funkar.
console.log(checkIfPalindrome("sirap - paris"));//true
console.log(checkIfPalindrome("lorem ipsum")); //false
console.log(checkIfPalindrome("rac car"));  //true
console.log(checkIfPalindrome("not a palindrome"));//false
console.log(checkIfPalindrome("Time, A man, and a dream"));//false  
console.log(checkIfPalindrome("nope - epon"));  //true
console.log(checkIfPalindrome("my age is 0 0 si ega ym"));// true 
console.log(checkIfPalindrome("paris - sirap"));  //true tvärtom
