import React  from 'react';
import Square from './Square.js';
import BoardHelper from '../BoardHelper'
const Board = ({ board, onClick }) => {

    const createSquare = (id) => {
        return <Square
            text={board[id]}
            onClick={() => onClick(id)}
            winningSquare={winningSquares[id]}
        />
    }
    const winningLine = BoardHelper.getWinningLine(board)
    let winningSquares = BoardHelper.getWinningSquares(winningLine)

    return (
        <div className="board">
            <div className="row">
                {createSquare(0)}
                {createSquare(1)}
                {createSquare(2)}
            </div>
            <div className="row">
                {createSquare(3)}
                {createSquare(4)}
                {createSquare(5)}
            </div>
            <div className="row">
                {createSquare(6)}
                {createSquare(7)}
                {createSquare(8)}
            </div>
        </div>
    );
};

export default Board;