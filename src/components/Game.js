import React, {useState} from 'react';
import '../main.css';
import Board from "./Board";
import Header from "./Header";
import Bottom from "./Bottom";

import BoardHelper from "../BoardHelper";


const App = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [next, setNext] = useState("X")
    const [winner, setWinner] = useState(null)

    const isWin = (_board) => {

        const winningLine = BoardHelper.getWinningLine(_board)

        if (winningLine) {
            setWinner(next)
            return true
        }
    }

    const handleMove = async (id) => {
        if (winner) return
        if (board[id]) return
        const newBoard = [...board].map((v,i) => i === id ? next : v)
        setBoard(newBoard)

        if (isWin(newBoard)) return
        setNext(next === "X" ? "O" : "X")

        const usedSquares = [...newBoard].filter(k => k != null).length
        console.log(usedSquares)
        if (usedSquares >= 9)
            handleReset()
    }

    const handleReset = () => {
        setBoard(Array(9).fill(null))
        setNext("X")
        setWinner(null)
    }

    return (
      <div className="game">
          <Header winner={winner}/>
          <Board onClick={handleMove} next={next} board={board}/>
          <Bottom onReset={handleReset}/>
      </div>
    );
};


export default App;
