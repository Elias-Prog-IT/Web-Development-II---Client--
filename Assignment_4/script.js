
/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 4
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 15/12/2021
   
*/
"use strict";

const searchForm = document.getElementById('search-form');
const resultContainer = document.getElementById("result");
const query = document.getElementById("query");

const displayMovies = (movies) => {
    //meddelar användaren att inga filmer hittades.
    if (!movies.Search) {
        alert("No results found.");
        return;
    }
    if (movies !== undefined) {
        console.log(movies);
        movies.Search.forEach(movie => {
            let div = document.createElement('div');
            div.classList.add('movie');
            let span = document.createElement('span');
            let img = document.createElement('img');
            img.src = movie.Poster;
            div.appendChild(img);
            span.innerHTML = `${movie.Title} (${movie.Year})`;
            div.appendChild(span);
            resultContainer.appendChild(div);
        });
    }
}

const fetchMovies = (movieTitle) => {
    //Objekt för att hantera AJAX
    const omdbAPI = new XMLHttpRequest();
    //Webbadressen vi ska använda.
    const omdbURL = `https://www.omdbapi.com/?apikey=f51690ca&s=${movieTitle.split(" ").join("%20")}&type=movie`;

    omdbAPI.onload = () => {
        //Konverterar resultatet från JSON
        const movies = JSON.parse(omdbAPI.responseText);
        displayMovies(movies);
    }

    // Anger vilken metod (get) och URL vi ska skicka med.
    omdbAPI.open("get", omdbURL, true);
    // Skicka förfrågan
    omdbAPI.send();
}

const start = (e) => {
    // Förhindrar att formuläret skickas
    e.preventDefault();
    // Tömer resultatet innan en nu placeras.
    resultContainer.innerHTML = "";
    const value = query.value;
    if (value === "") {
        alert("The search field cannot be empty");
        return;
    }
    fetchMovies(value);
}

searchForm.onsubmit = (e) => start(e);