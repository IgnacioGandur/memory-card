import { useState, useEffect, useRef } from "react";
import CharactersCarousel from "./CharactersCarousel";
import LoadingScreen from "./LoadingScreen";
import Header from "./Header";
import Footer from "./Footer";
import Styles from "./../styles/Game.module.css";
import StartGame from "./StartGame.jsx";
import ChooseDifficulty from "./ChooseDifficulty.jsx";
import mainCharacters from "./../data/main-characters";
import arrayOfCards from "./../data/cards.js";

const Game = () => {
    const [isLoading, setLoading] = useState(true);
    const [gameStarted, setGameStarted] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState("phantomBlood");
    const [amountOfCards, setAmountOfCards] = useState(10);
    const [score, setScore] = useState(0);
    const [highestScore, setHighestScore] = useState(0);
    const [characterIndex, setCharacterIndex] = useState(0);
    const [currentVoiceLine, setCurrentVoiceLine] = useState(
        new Audio(mainCharacters[characterIndex].voiceLine),
    );
    const [currentSongList, setCurrentSongList] = useState(
        mainCharacters[0].songs,
    );
    const [currentGifs, setCurrentGifs] = useState(mainCharacters[0].gifs);

    // When character index changes set the corresponding gifs, and voice line.
    useEffect(() => {
        setCurrentGifs(mainCharacters[characterIndex].gifs);
        setCurrentVoiceLine(
            new Audio(mainCharacters[characterIndex].voiceLine),
        );
    }, [characterIndex]);

    const playVoiceLine = () => {
        currentVoiceLine.play();
    };

    const handleLoad = () => {
        setLoading(false);
    };

    const handleSelectedSeason = (index) => {
        switch (index) {
            case 0: {
                setSelectedSeason("phantomBlood");
                break;
            }
            case 1: {
                setSelectedSeason("battleTendency");
                break;
            }
            case 2: {
                setSelectedSeason("stardustCrusaders");
                break;
            }
            case 3: {
                setSelectedSeason("diamondIsUnbreakable");
                break;
            }
            case 4: {
                setSelectedSeason("ventoAureo");
                break;
            }
            case 5: {
                setSelectedSeason("stoneOcean");
                break;
            }
            default:
                throw new Error("Invalid index number.");
        }
    };

    // Show loadin screen for 5 seconds before going to the game.
    useEffect(() => {
        setTimeout(() => {
            handleLoad();
            document.addEventListener("DOMContentLoaded", () => {
                handleLoad();
            });
        }, 5000);
        return () => {
            document.removeEventListener("DOMContentLoaded", handleLoad);
        };
        // Empty dependecy array so the useEffect hook only runs on mount.
    }, []);

    const resetDefaultSongList = () => {
        setCurrentSongList(mainCharacters[0].songs);
    };

    const resetDefaultGifs = () => {
        setCurrentGifs(mainCharacters[0].gifs);
    };

    const resetDefaultVoiceLine = () => {
        setCurrentVoiceLine(new Audio(mainCharacters[0].voiceLine));
    };

    // Ref hook to control the music when the game is playing.
    const audioRef = useRef();

    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <>
                    <Header
                        score={score}
                        highestScore={highestScore}
                        gameStarted={gameStarted}
                        amountOfCards={amountOfCards}
                        setAmountOfCards={setAmountOfCards}
                    />
                    <div
                        id="game-container"
                        className={Styles["game-container"]}
                    >
                        {gameStarted ? (
                            <StartGame
                                cardsArray={arrayOfCards[selectedSeason]}
                                amountOfCards={amountOfCards}
                                setScore={setScore}
                                setHighestScore={setHighestScore}
                                setGameStarted={setGameStarted}
                                score={score}
                                highestScore={highestScore}
                                setSelectedSeason={setSelectedSeason}
                                currentGifs={currentGifs}
                                resetDefaultSongList={resetDefaultSongList}
                                resetDefaultGifs={resetDefaultGifs}
                                resetDefaultVoiceLine={resetDefaultVoiceLine}
                            />
                        ) : (
                            <>
                                <p className={Styles["select-season"]}>
                                    Select a season
                                </p>
                                <CharactersCarousel
                                    characters={mainCharacters}
                                    handleSelectedSeason={handleSelectedSeason}
                                    setCharacterIndex={setCharacterIndex}
                                    setCurrentSongList={setCurrentSongList}
                                />
                                <ChooseDifficulty
                                    amountOfCards={amountOfCards}
                                    setAmountOfCards={setAmountOfCards}
                                />
                            </>
                        )}
                    </div>
                    <Footer
                        audioRef={audioRef}
                        setGameStarted={setGameStarted}
                        gameStarted={gameStarted}
                        playVoiceLine={playVoiceLine}
                        currentSongList={currentSongList}
                    />
                </>
            )}
        </>
    );
};

export default Game;
