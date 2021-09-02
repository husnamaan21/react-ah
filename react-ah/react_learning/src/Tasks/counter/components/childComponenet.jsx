import React from 'react';
import './counter.css';

function Child({add}) {
    return (
        <div className="input_container">
              <h1 className="counter">{add}</h1>
        </div>
    )
}

export default Child
