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

        if (cardData[cardData.length - 1] == text) {
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
        <span className='fs-5'>{text}</span>
      </div>
    </div>

  );
}


function App() {
  const levelsData = [
    ['Apple', 'Banana', 'Orange'],
    ['Afganistan', 'Iran', 'China', 'Pakistan'],
    ['Android', 'ChromeOS', 'macOS', 'Linux', 'Windows'],
  ];

  const listOne = ['1rStu', 'rS3wi', 'tw2Ui', 'uiTs3'];
  const listTwo = ['rS3wi', '1rStu', 'uiTs3', 'tw2Ui'];
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

  useEffect(() => {
    setCardIndexs([]);
    setScore(0);
    setCardData([]);
  }, [currentLevel]
  )


  // useEffect(() => {
  //   // const kingArr = levelsData[currentLevel].concat(levelsData[currentLevel]);
  //   if (score === kingArr.length / 2) {
  //     alert('Congratulations');
  //     setCardIndexs([]);
  //     setScore(0);
  //     setCardData([]);
  //   }
  // }, [score]);



  return (
    <div className="container">
      <h1 className='text-white text-center'>Match The Cards</h1>
      <div className=' px-3 d-flex justify-content-between'>
        <span className='fs-3 text-primary'>Level : {currentLevel + 1}</span>
        <span className='fs-3 text-primary'>Score : {score}</span>
      </div>
      {/* <div className='text-start px-3'></div> */}
      <Levels setCurrentLevel={setCurrentLevel} currentLevel={currentLevel} />
      <div className='main-container'>
      <div className=" d-flex justify-content-center flex-wrap gap-3 rounded p-5">

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
            score={score}
            setScore={setScore}
          />
        ))}
      </div>
      <div className='text-end'>
        <button className={`btn btn-warning  ${score == kingArr.length / 2 ? '' : 'disabled'}`} onClick={() => { if(currentLevel<3) {setCurrentLevel(currentLevel + 1)}  }}>Next</button>
      </div>
      </div>

    </div>
  );
}

export default App;
