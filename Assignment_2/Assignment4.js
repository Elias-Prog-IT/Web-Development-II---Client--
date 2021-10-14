/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 2 part 4
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 02/10/2021
   
*/

"use strict";

//Funktion för att kontrollera antalet förekomster av ett tecken
function countCharacter (str, letter) {
    let count = 0;

    // loopar upp till storleken på strängen
    for (let i = 0; i < str.length; i++) {

        // kontrollerar om karaktären är på den positionen
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

//Tar emot input från användaren
const string = prompt('Ange en sträng: ');
const letterToCheck = prompt('Ange en bokstav för att kontrollera: ');

const result = countCharacter (string, letterToCheck);

//Skriver ut antal tecken som har förekommit från strängen.
console.log("Antal ", letterToCheck, " är ",result, "st");
