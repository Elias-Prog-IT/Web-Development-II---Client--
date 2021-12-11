/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 3 part 3.js
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 20/11/2021
   
*/
"use strict";

const $ = function(id) { return document.getElementById(id); };

// Lägger till en event listener till button
const button = document.getElementById('add-item');
button.addEventListener('click', addItem);
const removeButton = document.getElementById('remove-item');
removeButton.addEventListener('click', removeItem);

// uppdaterar listan
function updateCount() {
  const counter = $('counter');
  const elList = $('items');
  counter.innerHTML = elList.children.length; 
}

//Sätter in Items i listan
function addItem() { 
  const sign = prompt("add new item as nth item");
  
  //skapar li element
  const elList  = $('items');
  const li = document.createElement('li');
  li.innerHTML = sign;
  elList.appendChild(li);
  
  // kallar på funktionen för att uppdatera antalet. 
  updateCount();
}

//Tar bort items i listan, från 
function removeItem()
{
   let items = document.getElementById('items');
   items.removeChild(items.lastElementChild);
   li.innerHTML = sign;

   updateCount();
}



