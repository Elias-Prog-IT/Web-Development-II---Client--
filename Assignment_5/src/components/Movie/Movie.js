/*
   @author: Elias Posluk
   Student-id: AG3064
   Uppgift: Assignment 5 
   Malmö University
   Course: DA281A Web Development II - Client - 
   @date 05/12/2021
   
*/
"use strict";

import React from 'react';
import "./Movie.css";

// Funktion för filmkomponent
const Movie = (props) => {
    const { id, title, year, rating, onDelete, onEdit } = props;
    return (
        <div className="movie__container">
            <p className="movie__title">{title}</p>
            <p className="movie__year">{year}</p>
            <p className="movie__rating">{rating}</p>
            <button className="movie__btn edit" onClick={() => onEdit(id)}>Edit</button>
            <button className="movie__btn delete" onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Movie;
