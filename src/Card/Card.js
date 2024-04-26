import './Card.css';
import backside from '../images/cardBackground.jpg';
import cat1 from '../images/cat.jpg';
import cat2 from '../images/img1.jpeg';
import cat3 from '../images/img2.jpeg';
import cat4 from '../images/img3.jpeg';
import cat5 from '../images/img4.jpeg';
import apple from '../images/apple.jpg';
import orange from '../images/orange.jpg';
import banana from '../images/banana.jpg';
import pineapple from '../images/pineapple.jpg';
import blueBird from '../images/bluebird.jpg';
import ranbowBird from '../images/colorfulBird.jpg';
import yellowBird from '../images/yellowBird.jpg';
import whiteBird from '../images/whiteBird.jpg';
import yellowCar from '../images/yellowCar.jpg';
import blueCar from '../images/blueCar.jpg';
import redCar from '../images/redCar.jpg';
import whiteCar from '../images/whiteCar.jpg';
import clickSound from '../Sounds/clickSound.mp3'
import scoreSound from '../Sounds/game-bonus.mp3'
import failureSound from '../Sounds/negative_beeps.mp3'

function Card({ text, index, cardIndexs, setCardIndexs, cardData, setCardData, score, setScore }) {

    // Manage Images Display
    const imageMap = {
        cat1, cat2, cat3, cat4, cat5,
        apple, orange, banana, pineapple,
        blueBird, ranbowBird, yellowBird, whiteBird,
        yellowCar, blueCar, redCar, whiteCar
    };

    const click = new Audio(clickSound)
    const victory = new Audio(scoreSound)
    const failure = new Audio(failureSound)

    // Manages Card Click Logic
    const handleCard = () => {
        // First Check if card is already rotated !
        if (!cardIndexs.includes(index)) {
            click.play();

            setCardIndexs([...cardIndexs, index]); // Then add new index to rotate card
            const newCardIndexs = [...cardIndexs];

            // check if clicked card is for comparing
            if (cardData !== '') {
                if (cardData === text) {
                    victory.play();
                    setScore(score + 1);
                } else {
                    failure.play();
                    setTimeout(() => {
                        newCardIndexs.pop();
                        setCardIndexs(newCardIndexs);
                    }, 1000);
                }
                setCardData('');

                // New Card Clicked
            } else {
                setCardData(text);
            }
        }
    };

    return (
        <div className={`card ${cardIndexs.includes(index) ? 'rotate' : ''}`} onClick={handleCard}>
            <div className="front">
                <img src={imageMap[text]} alt="frontSide" />
            </div>
            <div className="back">
                <img src={backside} alt="backSide" />
            </div>
        </div>
    );
}

export default Card;
