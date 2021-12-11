/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 3 part 1.js
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 20/11/2021
   
*/

"use strict";
//Samlar alla knappar från HTML
const buttons = document.querySelectorAll('button');

function changeMessageBoxClass(e) {
  // Parar ihop klassen "message-box" med knappens id. 
  document.getElementById('message-box').classList.value = e.target.id;
}

// Sätter click event listener för alla knappar. 
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', changeMessageBoxClass);
}
