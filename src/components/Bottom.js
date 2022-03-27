import React from 'react';

const Bottom = ({onReset}) => {
    return (
        <div className="bottom">
            <input type="button" onClick={onReset} value="Reset" className="reset-button" />
        </div>
    );
};

export default Bottom;