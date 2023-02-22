import React from 'react';

export const Button = () => {
    return (
        <div>
            <button onClick={()=>prompt("Test")}> Shared Button </button>
        </div>
    );
};

