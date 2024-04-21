import React, { useState, useEffect } from 'react';
import './Bootstrap.css';
import './Card.css';
import Levels from './Levels';

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
  const levelsData = [
    [1,2,3],
    [1,2,3,4],
    [1,2,3,4,5],
    [1,2,3,4,5,6]
]; 

  const listOne = ['2+2', '1+2', '2+7'];
  const listTwo = ['1+3', '2+1', '5+4'];
  let kingArr = []

  const [cardIndexs, setCardIndexs] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [score, setScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  if (currentLevel === 3) {
    kingArr = listOne.concat(listTwo);
  } else {
    kingArr = levelsData[currentLevel].concat(levelsData[currentLevel]);
  }

  useEffect( () => {
    setCardIndexs([]);
    setScore(0);
    setCardData([]);
  }, [currentLevel]
  )


  useEffect(() => {
    const kingArr = levelsData[currentLevel].concat(levelsData[currentLevel]);
    if (score === kingArr.length / 2) {
      alert('Congratulations');
      setCardIndexs([]);
      setScore(0);
      setCardData([]);
    }
  }, [score]);



  return (
    <div className="container">
      <h1 className='text-white text-center'>Match The Cards</h1>
      <div className=' px-3 d-flex justify-content-between'>
        <span className='fs-3 text-primary'>Level : {currentLevel+1}</span>
        <span className='fs-3 text-primary'>Score : {score}</span>
        </div>
      {/* <div className='text-start px-3'></div> */}
      <Levels setCurrentLevel = {setCurrentLevel} />
      <div className="main-container d-flex justify-content-center flex-wrap gap-3 rounded p-5">
      

        {/* <span>{levelsData[currentLevel]}</span> */}
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
