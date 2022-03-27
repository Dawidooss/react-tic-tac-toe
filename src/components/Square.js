import React from 'react';

const Square = ({ text, onClick, winningSquare }) => {
    return (
        <button
            className="square"
            onClick={onClick}
            style={{
                backgroundColor: winningSquare ? "darkorange" : "white"
            }}
        >
            {text}
        </button>
    );
};

export default Square;