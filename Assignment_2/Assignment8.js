/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 2 part 8
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 02/10/2021
   
*/
"use strict";

//Skapar en funktion CreateBox som tar emot två parametrar och 
//returnerar ett objekt innehållande attributen height och width med this.
const createBox = (heigt, width) =>
{
   this.heigt = heigt;
   this.width = width;
   return this;
}

var box = createBox(15, 20); 

//Skriver ut värderna
console.log(box.heigt);
console.log(box.width);


