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
import "./MovieAction.css";
import { useState, useEffect } from 'react';

// Filmåtgärdskomponent, radera och redigera.
const MovieAction = (props) => {
    const { onAction, movie } = props;
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");

    //ställer in dataformat till den givna filmen om användaren väljer att redigera när komponenten redigeras första gången
    useEffect(() => {
        if (movie) {
            setTitle(movie.title);
            setYear(movie.year);
            setRating(movie.rating);
        }
    }, [movie]);

    //Hanterar ändringar, gamla värden byts ut till nya värden som användaren har matat in. 
    const handleChange = (e) => {
        const value = e.target.value;
        if (e.target.id === "title") {
            setTitle(value);
        } else if (e.target.id === "year") {
            setYear(value);
        } else {
            setRating(value);
        }
    }
    //Anropar och sätter värdet till standardtillstånd 
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = movie ? movie.id : null;
        onAction(id, title, year, rating);
        setTitle("");
        setYear("");
        setRating("");
    }

    return (
        <form className="movieaction__form" onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label>Title:</label>
                <input className="movieaction__input" type="text" required id="title" value={title} onChange={(e) => handleChange(e)} />
            </div>
            <div>
                <label>Year:</label>
                <input className="movieaction__input" type="number" id="year" min="1000" max="2021" value={year} required onChange={(e) => handleChange(e)} />
            </div>
            <div>
                <label>Rating:</label>
                <input className="movieaction__input" type="number" required id="rating" min="0" max="10" step="0.1" value={rating} onChange={(e) => handleChange(e)} />
            </div>
            <button className="movieaction__btn">{`${movie === null ? "Add" : "Edit"} Movie`}</button>
        </form>
    )
}

export default MovieAction;
