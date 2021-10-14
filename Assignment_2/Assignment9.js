/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 2 part 9
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 02/10/2021
   
*/
"use strict";
//Skapar funktionen Triangle som tar emot två parametrar (height och width) 
//och returnerar ett objekt innehållande attributen height och width samt en funktion med namnet area()
//Funktionen area() tar fram arean med att multiplicera heigt och width och dividerar produkten med 2. 
const Triangle = (heigt, width) =>
{
   this.heigt = heigt;
   this.width = width;
   
  
   area();//kallar på funktionen area()
   return this;
}

function area()
{
    return (heigt * width / 2);
}


var tri = Triangle(12, 14);

//Skriver ut värderna. 
console.log(tri.heigt);
console.log(tri.width);
console.log(tri.area());




