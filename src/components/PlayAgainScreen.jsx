import Styles from "./../styles/PlayAgainScreen.module.css";
import darbyGood from "./../assets/sound-effects/darby-good.wav";
import { useEffect } from "react";
import yareYare from "./../assets/sound-effects/yare-yare.wav";

const PlayAgainScreen = ({
    playAgain,
    gameResult,
    currentGifs,
    resetDefaultSongList,
    resetDefaultGifs,
}) => {
    // SFX
    const darbySfx = new Audio(darbyGood);
    const yareYareSfx = new Audio(yareYare);
    const playWinnerSoundEffect = () => {
        darbySfx.volume = "0.5";
        darbySfx.play();
    };
    const playLoserSoundEffect = () => {
        yareYareSfx.volume = "0.5";
        yareYareSfx.play();
    };

    // Play the corresponding sound effect on win or lose.
    useEffect(() => {
        if (gameResult === "you won") {
            playWinnerSoundEffect();
        } else if (gameResult === "you lost") {
            playLoserSoundEffect();
        }
    }, [gameResult]);

    return (
        <div className={Styles["play-again-screen"]}>
            <p>
                {gameResult === "you won"
                    ? "Congratulations, " + gameResult + "!"
                    : "You lost."}
            </p>
            <img
                src={
                    gameResult === "you won"
                        ? currentGifs.win
                        : currentGifs.lose
                }
                alt=""
            />
            <div className={Styles.buttons}>
                <button onClick={() => playAgain(false)}>Play Again</button>
                <button
                    onClick={() => {
                        playAgain(true);
                        resetDefaultSongList();
                        resetDefaultGifs();
                    }}
                >
                    Choose another season
                </button>
            </div>
        </div>
    );
};

export default PlayAgainScreen;
