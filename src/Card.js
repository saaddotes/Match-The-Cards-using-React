import React, { useState, useEffect } from 'react';
import './Card.css';
import cat from  './images/cat.jpg'
import backside from './images/backside-removebg-preview.png'


function Card({ text, index, cardIndexs, setCardIndexs, cardData, setCardData, score, setScore }) {
    const handleCard = () => {
        console.log("Working")
        if (!cardIndexs.includes(index)) {
            setCardIndexs([...cardIndexs, index]);

            let newscore = score

            const newCardData = [...cardData, text];
            let newCardIndexs = [...cardIndexs];
            setCardData(newCardData);
            if (cardData.length === 0) {
                newCardIndexs = [...cardIndexs, index];

            }
            else if (cardData.length > 0) {

                if (cardData[cardData.length - 1] === text) {
                    newCardIndexs = [...cardIndexs, index];
                    newscore = score + 1;
                }
                else {
                    newCardIndexs = [...cardIndexs];
                    newCardIndexs.pop();
                }
                setCardData([])
            }

            setTimeout(() => {
                setCardIndexs(newCardIndexs)
            }, 1000);

            setScore(newscore);

        }
    };



    return (
        // <div className={`card-container ${cardIndexs.includes(index) ? 'unrotate' : 'rotate'}`}>
        //   <div className='card-dim rounded text-center' onClick={handleCard}>
        //     <span className='fs-5'>{text}</span>
        //   </div>
        // </div>

        <div className={`card ${cardIndexs.includes(index) ? 'rotate' : ''}`} onClick={handleCard}>
            <div className="front">{text}</div>
            {/* <img src={cat} alt="cat" /> */}
            <div className="back"><img src={backside} alt="backSide" /></div>
        </div>

    );
}

export default Card