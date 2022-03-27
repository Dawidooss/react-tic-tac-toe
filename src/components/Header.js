import React from 'react';

const Header = ({ winner }) => {
    return (
        <div>
            <h3 className="header">Tic Tac Toe</h3>
            {winner && <p> Wygrany: {winner}</p>}
        </div>
    );
};

export default Header;