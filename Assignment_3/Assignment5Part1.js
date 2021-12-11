/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 5 part 1.js
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 22/11/2021
   
*/
"use strict";

// Hämtar formuläret. 
var form = document.getElementById('apply-for-pet');

form.addEventListener('submit', function (event) {
  // Genom denna rad så avbryter vi att formuläret skickar oss vidare.
  event.preventDefault();

  // Utmatning från det ifyllda formuläret. 
  console.log('First Name:', this.elements.firstname.value);
  console.log('Last Name:', this.elements.lastname.value);
  console.log('Age:', this.elements.age.value);
  console.log('Email:', this.elements.email.value);
  console.log('Pet:', this.elements.pet.value);

  //event.target.submit();
});
