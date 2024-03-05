import { useState, useEffect } from "react";
import Styles from "./../styles/ChooseDifficulty.module.css";
import clickSoundEffect from "./../assets/sound-effects/click.mp3";

const ChooseDifficulty = ({ amountOfCards, setAmountOfCards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const options = ["Easy", "Medium", "Hard"];
    const clickSFX = new Audio(clickSoundEffect);
    clickSFX.volume = "0.1";

    const next = () => {
        const nextIndex =
            currentIndex === options.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    };

    const previous = () => {
        const previousIndex =
            currentIndex === 0 ? options.length - 1 : currentIndex - 1;
        setCurrentIndex(previousIndex);
    };

    const playSoundEffect = () => {
        clickSFX.play();
    };

    // Change the amount of cards based on the difficulty chosen.
    useEffect(() => {
        switch (currentIndex) {
            case 0: {
                setAmountOfCards(10);
                break;
            }
            case 1: {
                setAmountOfCards(15);
                break;
            }
            case 2: {
                setAmountOfCards(20);
                break;
            }
            default:
                throw new Error("Invalid index number.");
        }
    }, [currentIndex]);

    return (
        <div className={Styles["difficulty-container"]}>
            <p>Difficulty</p>
            <div className={Styles.controls}>
                <button
                    onClick={() => {
                        previous();
                        playSoundEffect();
                    }}
                >
                    <span className="material-symbols-rounded">
                        chevron_left
                    </span>
                </button>
                <div className={Styles.options}>
                    {options.map((option, index) => (
                        <p
                            className={
                                index === currentIndex ? `${Styles.active}` : ""
                            }
                            key={index}
                        >
                            {option}
                        </p>
                    ))}
                </div>
                <button
                    onClick={() => {
                        next();
                        playSoundEffect();
                    }}
                >
                    <span className="material-symbols-rounded">
                        chevron_right
                    </span>
                </button>
            </div>
            <p>{amountOfCards} cards</p>
        </div>
    );
};

export default ChooseDifficulty;
