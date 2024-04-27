import React, { useState, useEffect } from 'react';
import './Bootstrap.css';
import './Card/Card.css';
import Levels from './Levels/Levels';
import Card from './Card/Card'


function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const requestFullScreen = () => {
    const element = document.documentElement;
    if (isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };


  const levelsData = [
    ['apple', 'banana', 'orange', 'pineapple'],
    ['cat1', 'cat2', 'cat3', 'cat4'],
    ['whiteBird', 'blueBird', 'ranbowBird', 'yellowBird'],
    ['redCar', 'blueCar', 'whiteCar', 'yellowCar'],
  ];


  const [cardIndexs, setCardIndexs] = useState([]);
  const [cardData, setCardData] = useState('');
  const [score, setScore] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [unlockedLevles, setUnlockedLevels] = useState([])
  // let unlockedLevles = []
  let kingArr = levelsData[currentLevel].concat(levelsData[currentLevel]);

  useEffect(() => {
    setCardIndexs([]);
    setScore(0);
    setCardData('');
  }, [currentLevel]
  )
  let btn_text = currentLevel > 2 ? 'Finish' : 'Next';

  const restart = function () {
    setCurrentLevel(0)
    setCurrentLevel([])
  }

  return (
    <div className="container">

      <div className=' main-container px-3 mt-2'>
        <div className='row align-items-center'>
          <div className='col-lg-4'>
            <button className='bg-warning btn button' onClick={requestFullScreen}>
              {isFullScreen ? 'Exit Full Screen' : 'Enter Full Screen'}
            </button>
          </div>
          <div className='col-lg-4'>
            <h1 className='text-white text-center'>Match The Cards</h1>
          </div>
          <div className='col-lg-4 text-end'>
            <span className='fs-3 text-white fw-bold'>Score : {score}</span>
          </div>

        </div>


      </div>

      <Levels setCurrentLevel={setCurrentLevel} currentLevel={currentLevel} unlockedLevles={unlockedLevles} />
      <div className=' px-3 d-flex justify-content-between'>
        <span className='fs-3 text-white fw-bold'>Level : {currentLevel + 1}</span>
        <button className={`btn btn-warning  ${score === kingArr.length / 2 ? '' : 'disabled'}`}
          onClick={() => {
            if (currentLevel < 3) {
              setCurrentLevel(currentLevel + 1)
              setUnlockedLevels([...unlockedLevles, currentLevel])
            } else {
              restart()
            }
          }}>{btn_text}</button>
      </div>
      <div className='text-end mb-3'>
      </div>
      <div className='main-container'>
        <div className=" d-flex justify-content-center flex-wrap gap-3 rounded py-3">

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
      </div>

    </div>
  );
}

export default App;
