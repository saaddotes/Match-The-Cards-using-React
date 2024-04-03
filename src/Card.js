import React, { useState, useEffect } from 'react';
import './Card.css';


function Card({ text , isSelected, handleClick}) {
    
    return (
        <div className={`card-container ${isSelected ? 'unrotate' : 'rotate'}`}>
            <div className='card-dim rounded text-center' onClick={handleClick}>
                <span>{text}</span>
            </div>
        </div>

    );
}

export default Card