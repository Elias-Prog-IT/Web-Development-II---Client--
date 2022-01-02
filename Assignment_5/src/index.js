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
import ReactDOM from 'react-dom';
import './index.css';
import MoviesDb from './components/MoviesDb/MoviesDb';


function App() {
  return (
    <div className="app__container">
      <MoviesDb />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


