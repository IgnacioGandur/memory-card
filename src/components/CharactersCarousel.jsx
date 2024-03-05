import background from "./../assets/images/card-background.png";
import { useState } from "react";
import Styles from "./../styles/CharactersCarousel.module.css";
import clickSoundEffect from "./../assets/sound-effects/click.mp3";
import mainCharacters from "../data/main-characters";

const CharactersCarousel = ({
    characters,
    handleSelectedSeason,
    setCharacterIndex,
    setCurrentSongList,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const clickSFX = new Audio(clickSoundEffect);
    clickSFX.volume = "0.1";

    const nextCharacter = () => {
        const nextIndex =
            currentIndex === characters.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        handleSelectedSeason(nextIndex);
        setCharacterIndex(nextIndex);
        setCurrentSongList(mainCharacters[nextIndex].songs);
    };

    const previousCharacter = () => {
        const previousIndex =
            currentIndex === 0 ? characters.length - 1 : currentIndex - 1;
        setCurrentIndex(previousIndex);
        handleSelectedSeason(previousIndex);
        setCharacterIndex(previousIndex);
        setCurrentSongList(mainCharacters[previousIndex].songs);
    };

    const playWooshSoundEffect = () => {
        clickSFX.play();
    };

    return (
        <div className={Styles["characters-carousel"]}>
            <button
                onClick={() => {
                    nextCharacter();
                    playWooshSoundEffect();
                }}
                className={Styles["next-character"]}
            >
                <span className="material-symbols-rounded">
                    arrow_forward_ios
                </span>
            </button>
            {characters.map((character, index) => (
                <div
                    key={index}
                    className={`${Styles.character} ${index === currentIndex ? `${Styles.active} ` : ""}`}
                    style={{
                        backgroundImage: `linear-gradient(${character.backgroundColor}, ${character.backgroundColor}), url(${background})`,
                        backgroundSize: "cover",
                    }}
                >
                    <p>{character.season}</p>
                    <img src={character.picture} alt={character.name} />
                    <p>{character.name}</p>
                </div>
            ))}
            <button
                onClick={() => {
                    previousCharacter();
                    playWooshSoundEffect();
                }}
                className={Styles["previous-character"]}
            >
                <span className="material-symbols-rounded">
                    arrow_back_ios_new
                </span>
            </button>
        </div>
    );
};

export default CharactersCarousel;
