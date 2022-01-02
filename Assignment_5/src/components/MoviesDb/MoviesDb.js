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
import Movie from "../Movie/Movie";
import { Movies } from "../../data/Movies";
import { useState, useEffect } from 'react';
import MovieAction from '../MovieAction/MovieAction';
import "./MoviesDb.css";
import Modal from '../Modal/Modal';

// Filmens databaskomponent. 
const MoviesDb = () => {
    const [movies, setMovies] = useState(Movies);
    const [message, setMessage] = useState("");
    const [isModalShown, setIsModalShown] = useState(false);
    const [movieToEdit, setMovieToEdit] = useState(null);

    // Ställer in tidsinterval på två sekunder för när den visas och döljs.   
    useEffect(() => {
        const interval = setInterval(() => {
            setIsModalShown(false);
            setMessage("");
        }, 2000)
        return () => {
            clearInterval(interval);
        }
    }, [isModalShown]);

    // Hanterar borttagning av filmer efter filmens id. 
    const handleDelete = (id) => {
        setMovies(movies.filter(m => m.id !== id));
        setIsModalShown(true);
        setMessage("Movie Deleted");
    }

    // Hanterar tilläggning och redigering av filmer, om id är given inom parametern så utförs redigering, 
    // om inte så är det tilläggning av film som utförs
    const handleAction = (id, title, year, rating) => {
        const newId = id === null ? movies[movies.length - 1].id + 1 : id;
        const newMovie = {
            id: newId,
            title: title,
            year: year,
            rating: rating
        }
        let temp = movies;
        const i = temp.findIndex(m => m.id === newId);
        debugger;
        if (i < 0) {
            temp.push(newMovie);
        } else {
            temp[i] = newMovie;
        }
        console.log(temp)
        setMovies(temp);
        setIsModalShown(true);
        setMessage(`Movie ${movieToEdit === null ? "Added" : "Edited"}`);
        movieToEdit && setMovieToEdit(null);
    }

    // Hanterar redigering knappen på click event och lägger till filmen som skickas till movie action komponenten. 
    const handleEdit = (id) => {
        setMovieToEdit(movies.find(m => m.id === id));
    }
    return (
        <div className="moviesdb__container">
            <h1 className="moviesdb__title">Movies</h1>
            <Modal message={message} show={isModalShown} />
            <MovieAction onAction={handleAction} movie={movieToEdit} />
            {movies.map(movie => (
                <Movie key={movie.id} {...movie} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
        </div>
    )
}

export default MoviesDb
