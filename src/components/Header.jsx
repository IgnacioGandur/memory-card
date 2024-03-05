import Styles from "./../styles/Header.module.css";
import J from "./../assets/images/logo/J.svg";
import O from "./../assets/images/logo/o.svg";
import S from "./../assets/images/logo/s.svg";
import memoryCardGame from "./../assets/images/logo/MemoryCardGame.svg";

const Header = ({ score, highestScore, gameStarted }) => {
    return (
        <header className={Styles.header}>
            <div className={Styles["logo-container"]}>
                <div className={Styles.letters}>
                    <img src={J} alt="Logo first letter" />
                    <img src={O} alt="Logo second letter" />
                    <img src={J} alt="Logo third letter" />
                    <img src={O} alt="Logo fourth letter" />
                    <img src={S} alt="Logo last letter" />
                </div>
                <img src={memoryCardGame} alt="Memory card game" />
            </div>
            {gameStarted && (
                <div className={Styles["score-container"]}>
                    <p style={{ color: "white" }}>
                        Current score: <span>{score}</span>
                    </p>
                    <p style={{ color: "white" }}>
                        Highest Score: <span>{highestScore}</span>
                    </p>
                </div>
            )}
        </header>
    );
};

export default Header;
