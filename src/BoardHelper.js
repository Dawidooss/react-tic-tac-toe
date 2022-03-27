module.exports.getWinningLine = (board) => {
    const winningLines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    return winningLines.find(winningLine => {
        return (board[winningLine[0]] === "X" && board[winningLine[1]] === "X" && board[winningLine[2]] === "X")  || (board[winningLine[0]] === "O" && board[winningLine[1]] === "O" && board[winningLine[2]] === "O")
    })
}

module.exports.getWinningSquares = (winningLine) => {
    let winningSquares = {};
    (winningLine || []).forEach((i) => {winningSquares[i] = true})
    return winningSquares
}