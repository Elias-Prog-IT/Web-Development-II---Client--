/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 4 part 4.js
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 20/11/2021
   
*/
"use strict";

// Samlar alla list knappar med "remove-list-item"
const buttons = document.getElementsByClassName('remove-list-item');

// Sätter click event listener för alla knappar. 
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    // Frågar användaren att godkänna utförandet att radera list-element. 
    if (confirm('Are you sure you want to delete this item?')) {
      // Tar bort parent element, vilket är li där denna knapp är ett barn till
      event.target.parentElement.remove();
    }
  });
}
