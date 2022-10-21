import React from 'react'


//This file defines one square of Board 
//also contains function and what to display in that particular square

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.val}
      </button>
    );
  }
  
export default Square
