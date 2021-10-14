/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 2 part 7
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 02/10/2021
   
*/

"use strict";

//Skapar ett objekt och sparar det i variabeln person
var person = { 
    firstName: "Elias", 
    lastName: "Posluk", 
    age: 32, 
    car:"Volvo V70",
    family: 'Father, Mother, Sister, Brother',
}; 

//Funktionen tar emot ett objekt som parameter och skriver ut dess attribut 
function printPerson (person) 
{
    console.log("First name: ",person.firstName, "\nLast name: ", person.lastName, "\nAge: ", person.age, "\nCar: ", person.car, "\nFamily: ", person.family);
}

//Skriver ut värderna
printPerson(person);
