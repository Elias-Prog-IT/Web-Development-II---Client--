/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 2 part 10
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 02/10/2021
   
*/
"use strict";

//TestObject1 med width och height som attribut 
var testObject1 = {
    width: 15,
    height: 20
};
//Skapar funktionen attributes som tar emot ett objekt som en parameter och returnerar en array innehållande alla namnen på objektets attribut. 
//Funktionen innehåller en array som tar emot attributen från testObject1. 
const attributes = (testObject1) =>
{   
    var arr = [];
    
    for (var attribute in testObject1)
    {
        arr.push(attribute);
    }
    return arr;
}

var attrsFromObject1 = attributes(testObject1);

//Skriver ut värderna
console.log(attrsFromObject1);

//TestObject2 med width och height som attribut 
var testObject2 = {
    a: 1,
    b: 2,
    c: 3
};
//Skapar funktionen attributes2 som tar emot ett objekt som en parameter och returnerar en array innehållande alla namnen på objektets attribut. 
//Funktionen innehåller en array som tar emot attributen från testObject2. 
const attributes2 = (testObject2) =>
{   
    var arr = [];
    
    for (var attribute in testObject2)
    {
        arr.push(attribute);
    }
    return arr;
}

var attrsFromObject2 = attributes2(testObject2);
//Skriver ut värderna
console.log(attrsFromObject2);