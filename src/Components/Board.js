import React, { Component } from 'react'
import Square from './Square';


//This is the board file which contains collection of 9 square which make our tic-tac-toe board
class Board extends Component {
    //This is the renderSquare method which take's input a parameter as number of square 
    //and pass value to be displayed and onClick functio as a prop to Square  
    renderSquare(i){
      return (
      <Square 
        val={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
      ></Square>
      );
    }
    render() {
      return (
        <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        </div>
      );
    }
  }
  
export default Board