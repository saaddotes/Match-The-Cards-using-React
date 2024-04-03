import React, { useState, useEffect } from 'react';
import './Bootstrap.css';
import './Card.css';

function Card({ text, index, cardIndexs, setCardIndexs, cardData, setCardData }) {
  const handleCard = () => {
    setCardIndexs([...cardIndexs, index]);

    if (!cardIndexs.includes(index)) {
      const newCardData = [...cardData, text];
      let newCardIndexs = [...cardIndexs];
      setCardData(newCardData);
      if (cardData.length === 0) {
        newCardIndexs = [...cardIndexs, index];

      }
      else if (cardData.length > 0) {

        if (cardData[cardData.length - 1] == text) {
          newCardIndexs = [...cardIndexs, index];
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


    }
  };



  return (
    <div className='col-2'>
      <div className={`card-container ${cardIndexs.includes(index) ? 'unrotate' : 'rotate'}`}>
        <div className='card-dim rounded text-center' onClick={handleCard}>
          <span>{text}</span>
        </div>
      </div>
    </div>

  );
}


function App() {
  const fruits = ['apple', 'mango', 'banana', 'grapes', 'orange'];
  const kingArr = fruits.concat(fruits);

  const [cardIndexs, setCardIndexs] = useState([]);
  const [cardData, setCardData] = useState([]);


  useEffect(() => {
    if (cardIndexs.length === kingArr.length) {
      alert('Congratulations');
      setCardIndexs([]);
      setCardData([]);
    }
  }, [cardIndexs, kingArr.length]);



  return (
    <div className="container">
      <h1 className='text-white text-center'>Match The Cards</h1>
      <div className="main-container d-flex justify-content-center flex-wrap gap-3 rounded p-5">
        {kingArr.map((item, index) => (
          <Card
            key={index}
            index={index}
            text={item}
            cardIndexs={cardIndexs}
            setCardIndexs={setCardIndexs}
            cardData={cardData}
            setCardData={setCardData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
