import './Card.css';
import backside from '../images/cardBackground.jpg'
import cat1 from '.././images/cat.jpg'
import cat2 from '.././images/img1.jpeg'
import cat3 from '.././images/img2.jpeg'
import cat4 from '.././images/img3.jpeg'
import cat5 from '.././images/img4.jpeg'
import apple from '.././images/apple.jpg'
import orange from '.././images/orange.jpg'
import banana from '.././images/banaa.jpg'
import pineapple from '.././images/pineapple.jpg'
import blueBird from '.././images/bluebird.jpg'
import ranbowBird from '.././images/colorfulBird.jpg'
import yellowBird from '.././images/yellowBird.jpg'
import whiteBird from '.././images/whiteBird.jpg'
import yellowCar from '.././images/yellowCar.jpg'
import blueCar from '.././images/blueCar.jpg'
import redCar from '.././images/redCar.jpg'
import whiteCar from '.././images/whiteCar.jpg'



function Card({ text, index, cardIndexs, setCardIndexs, cardData, setCardData, score, setScore }) {
    // Manage Images Display
    const imageMap = {
        cat1: cat1,
        cat2: cat2,
        cat3: cat3,
        cat4: cat4,
        cat5: cat5,
        apple: apple,
        banana: banana,
        orange: orange,
        pineapple: pineapple,
        whiteBird: whiteBird,
        blueBird: blueBird,
        ranbowBird: ranbowBird,
        yellowBird: yellowBird,
        redCar: redCar,
        blueCar: blueCar,
        whiteCar: whiteCar,
        yellowCar: yellowCar
    };

    // Manages Card Click Logic
    const handleCard = () => {

        let newscore = score

        setCardIndexs([...cardIndexs, index]);
        let newCardIndexs = [...cardIndexs];

        const newCardData = [...cardData, text];
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
    };








    return (
        // <div className={`card-container ${cardIndexs.includes(index) ? 'unrotate' : 'rotate'}`}>
        //   <div className='card-dim rounded text-center' onClick={handleCard}>
        //     <span className='fs-5'>{text}</span>
        //   </div>
        // </div>

        <div className={`card ${cardIndexs.includes(index) ? 'rotate' : ''}`} onClick={!cardIndexs.includes(index) ? handleCard : null}>
            <div className="front">
                <img src={imageMap[text]} alt="frontSide" />
            </div>
            <div className="back"><img src={backside} alt="backSide" /></div>
        </div>

    );
}

export default Card