import React from 'react'
import './squareStyle.css'
//This file defines one square of Board 
//also contains function and what to display in that particular square

function Square(props) {
    return (
      <button className="btn btn-outline-dark" id="sqaurebutton" onClick={props.onClick}>
        <h1 id="TextInsideSquare">{props.val}</h1>
      </button>
    );
  }
  
export default Square
