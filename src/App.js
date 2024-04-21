import React, { useState, useEffect } from 'react';
import './Bootstrap.css';
import './Card.css';

function Card({ text, index, cardIndexs, setCardIndexs, cardData, setCardData, score, setScore }) {
  const handleCard = () => {
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

        if (eval(cardData[cardData.length - 1]) == eval(text)) {
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
    <div className={`card-container ${cardIndexs.includes(index) ? 'unrotate' : 'rotate'}`}>
      <div className='card-dim rounded text-center' onClick={handleCard}>
        <span>{text}</span>
      </div>
    </div>

  );
}


function App() {
  const listOne = ['2+2', '1+2', '2+7'];
  const listTwo = ['1+3', '2+1', '5+4'];
  const kingArr = listOne.concat(listTwo);

  const [cardIndexs, setCardIndexs] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [score, setScore] = useState(0);


  useEffect(() => {
    if (cardIndexs.length > kingArr.length) {
      // alert('Congratulations');
      setCardIndexs([]);
      setCardData([]);
    }
  }, [cardIndexs, kingArr.length]);



  return (
    <div className="container">
      <h1 className='text-white text-center'>Match The Cards</h1>
      <div className='text-end px-3'><span className='fs-3 text-primary'>Score : {score}</span></div>
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
            score = {score}
            setScore = {setScore}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
