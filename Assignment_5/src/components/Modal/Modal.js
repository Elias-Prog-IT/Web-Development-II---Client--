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
import "./Modal.css";

// Modal komponent
const Modal = (props) => {
    const { message, show } = props;
    return (
        <div className={`modal__container ${show ? "show" : ""}`}>
            {message}
        </div>
    )
}

export default Modal;
