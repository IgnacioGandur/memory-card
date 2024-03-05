import Styles from "./../styles/Footer.module.css";
import { useState, useEffect } from "react";

const Footer = ({
    audioRef,
    setGameStarted,
    gameStarted,
    playVoiceLine,
    currentSongList,
}) => {
    // Control song.
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSong, setCurrentSong] = useState(
        currentSongList[currentIndex],
    );
    const [isSongPlaying, setIsSongPlaying] = useState(false);
    const [volume, setVolume] = useState(0.25);

    const playNextSong = () => {
        const nextIndex =
            currentIndex === currentSongList.length - 1 ? 0 : currentIndex + 1;
        setCurrentSong(currentSongList[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    const playPreviousSong = () => {
        const previousIndex =
            currentIndex === 0 ? currentSongList.length - 1 : currentIndex - 1;
        setCurrentSong(currentSongList[previousIndex]);
        setCurrentIndex(previousIndex);
    };

    const togglePlayPause = () => {
        setIsSongPlaying((prev) => !prev);
    };

    // Control volume.
    const handleVolume = (value) => {
        setVolume(value);

        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    };

    // Change volume.
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume, audioRef]);

    // Set the current song to the first song in the list whenever the season changes.
    useEffect(() => {
        setCurrentSong(currentSongList[0]);
    }, [currentSongList]);

    // Play the current song whenever any of the dependencies in the array change.
    useEffect(() => {
        // If the value in the current ref is not undefined execute the body of the condition.
        if (audioRef.current) {
            if (isSongPlaying && gameStarted) {
                audioRef.current.volume = volume;
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isSongPlaying, audioRef, currentSong, gameStarted]);

    const resetDefaultSong = () => {
        setCurrentIndex(0);
        setCurrentSong(currentSongList[0]);
    };

    // Reset the current song and the current index when the player changes season after a game.
    useEffect(() => {
        if (!gameStarted) {
            resetDefaultSong();
        }
    }, [gameStarted]);

    return (
        <footer className={Styles.footer}>
            {gameStarted && (
                <div className={Styles.volume}>
                    <label htmlFor="volume">
                        <p>Volume</p>
                        <input
                            value={volume}
                            type="range"
                            id="volume"
                            name="volume"
                            min="0"
                            max="1"
                            step="0.01"
                            onChange={(e) => {
                                handleVolume(e.target.value);
                            }}
                        />
                    </label>
                </div>
            )}
            {gameStarted ? (
                <div className={Styles.songs}>
                    <div className={Styles["songs-container"]}>
                        <p className={Styles.song}>{currentSong.name}</p>
                        <audio
                            src={currentSong.audio}
                            ref={audioRef}
                            onEnded={playNextSong}
                        ></audio>
                    </div>
                    <div className={Styles.controls}>
                        <button onClick={playPreviousSong}>
                            <span className="material-symbols-rounded">
                                skip_previous
                            </span>
                        </button>
                        <button onClick={togglePlayPause}>
                            <span className="material-symbols-rounded">
                                {isSongPlaying ? "pause_circle" : "play_circle"}
                            </span>
                        </button>
                        <button onClick={playNextSong}>
                            <span className="material-symbols-rounded">
                                skip_next
                            </span>
                        </button>
                    </div>
                </div>
            ) : null}
            {gameStarted ? null : (
                <button
                    className={Styles["start-game"]}
                    onClick={() => {
                        setGameStarted(true);
                        playVoiceLine();
                        setIsSongPlaying(true);
                    }}
                >
                    Start
                </button>
            )}
            <div className={Styles.github}>
                <a
                    href="https://github.com/IgnacioGandur/memory-card"
                    target="_blank"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
