/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 5 part 2.js
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

  // Hämtar alla värdena från fälten
  const firstname = this.elements.firstname.value;
  const lastname = this.elements.lastname.value;
  const age = this.elements.age.value;
  const email = this.elements.email.value;
  const pet = this.elements.pet.value;

  // Validering
  let validFirstname = false;
  let validLastname = false;
  let validAge = false;
  let validEmail = false;
  let validPet = false;
  let alertMessage = 'Vänligen fyll i formuläret korrekt.';

  // Förnamn och efternamn får endast innehålla 0 till 50 bokstäver.
  if (firstname.length >= 0 && firstname.length <= 50) {
    validFirstname = true;
  } else {
    alertMessage += '\n - Förnamn - får endast innehålla 0 till 50 bokstäver.';
  }

  if (lastname.length >= 0 && lastname.length <= 50) {
    validLastname = true;
  } else {
    alertMessage += '\n - Efternamn - får endast innehålla 0 till 50 bokstäver.';
  }

  // Konverterar ålder till en siffra och den måste vara mer än 0
  if (Number(age) > 0) {
    validAge = true;
  } else {
    alertMessage += '\n - Ogiltig ålder.';
  }

  // Epost - får endast innehålla 0 till 50 bokstäver
  if (email.length >= 0 && email.length <= 50) {
    validEmail = true;
  } else {
    alertMessage += '\n - Epost - får endast innehålla 0 till 50 bokstäver.';
  }

  // Husdjur - ett husdjur måste vara valt
  if (pet !== '') {
    validPet = true;
  } else {
    alertMessage += '\n - Husdjur - ett husdjur måste vara valt.';
  }

  // Om alla dessa kraven stämmer för samtliga fält kan vi gå vidare med att anropa submit()
  if (validFirstname && validLastname && validAge && validEmail & validPet) {
    event.target.submit();
  }

  // Återkopplar om vad som inte stämmer när vi försöker skicka formuläret.
  else {
    alert(alertMessage);
  }
});
