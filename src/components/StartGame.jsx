import { useState, useEffect } from "react";
import RenderCards from "./RenderCards";
import PlayAgainScreen from "./PlayAgainScreen";
import CardStyles from "./../styles/RenderCards.module.css";

const StartGame = ({
    cardsArray,
    amountOfCards,
    setScore,
    setHighestScore,
    setGameStarted,
    score,
    highestScore,
    setSelectedSeason,
    currentGifs,
    resetDefaultSongList,
    resetDefaultGifs,
    resetDefaultVoiceLine,
}) => {
    const takeTurn = (card) => {
        // Prevent user from clicking the cards during the rotation animation.
        const allCards = document.querySelectorAll(`.${CardStyles.card}`);
        allCards.forEach((card) => {
            card.style.pointerEvents = "none";
        });

        // Return the ability to click the card after 1750ms.
        setTimeout(() => {
            allCards.forEach((card) => {
                card.style.pointerEvents = "auto";
            });
        }, 1750);

        // Check if player lost on each turn.
        if (selectedCards.includes(card)) {
            setGameEnded(true);
            setGameResult("you lost");
            // Return true to play the rotate card sound effect.
            return true;
        } else {
            // Add the selected card to the array of selected cards.
            setSelectedCards([...selectedCards, card]);
            // Increase score.
            setScore((previousScore) => previousScore + 1);
        }
    };

    // Generate random numbers from 0 up until the cards array's lenght.
    const generateArrayOfRandomNumbers = (cardsArray, amountOfCards) => {
        const arrayLength = cardsArray.length;

        let arrayOfNumbers = [];

        // Generate random number, if number already exists, call the function recursively, else push the number in the array.
        const generateRandomNumber = () => {
            const newNumber = Math.floor(Math.random() * arrayLength);

            if (arrayOfNumbers.includes(newNumber)) {
                generateRandomNumber();
            } else {
                arrayOfNumbers.push(newNumber);
            }
        };

        // Populate the array of random numbers.
        for (let i = 0; i < amountOfCards; i++) {
            generateRandomNumber();
        }

        return arrayOfNumbers;
    };

    // Create a random array of cards by passing the complete list of cards, a random array of numbers and the amount of desired cards.
    const createDeckOfCards = (arrayOfCards, arrayOfNumbers, numberOfCards) => {
        let newDeckOfCards = [];

        // Run a loop based on the difficulty/amount of cards the player chose.
        for (let i = 0; i < numberOfCards; i++) {
            // Grab the first random number of the array of random numbers
            // and use it to select a card from the array of cards,
            // then push it into the array that is going to be used to play the game.
            let currentNumber = arrayOfNumbers[i];
            let currentCard = arrayOfCards[currentNumber];
            newDeckOfCards.push(currentCard);
        }

        return newDeckOfCards;
    };

    // Get the deck of cards that is used to play the game and shuffle it after each turn.
    const shuffleDeck = () => {
        // Generate array of random numbers from 0 up until the deck's length.
        let randomNumbers = [];

        const generateRandomNumber = (ceilingNumber) => {
            const randomNumber = Math.floor(Math.random() * ceilingNumber);
            if (randomNumbers.includes(randomNumber)) {
                generateRandomNumber(ceilingNumber);
            } else {
                randomNumbers.push(randomNumber);
            }
        };

        // Generate random numbers from 0 up until the amount of cards in the deck.
        for (let i = 0; i < deckOfCards.length; i++) {
            generateRandomNumber(deckOfCards.length);
        }

        let shuffledDeck = [];

        // Re-order the deck using the previously generated array of random numbers.
        for (let i = 0; i < deckOfCards.length; i++) {
            const currentNumber = randomNumbers[i];
            shuffledDeck.push(deckOfCards[currentNumber]);
        }

        // Use the shuffled deck of cards to play the next turn.
        setDeckOfCards(shuffledDeck);
    };

    // Re-play the game.
    const playAgain = (changeSeason) => {
        // If the player goes to choose another season, set phantom blood as the 'default' season.
        if (changeSeason) {
            setSelectedSeason("phantomBlood");
            setGameStarted(false);
        }
        // If not, start the game again with a newly created set of cards to avoid repetition.
        setScore(0);
        setSelectedCards([]);
        setGameEnded(false);
        setGameResult("");
        setDeckOfCards(
            createDeckOfCards(
                cardsArray,
                generateArrayOfRandomNumbers(cardsArray, amountOfCards),
                amountOfCards,
            ),
        );
        // Keep getting track of the highest score.
        if (score > highestScore) {
            setHighestScore(score);
        }
    };

    const [deckOfCards, setDeckOfCards] = useState(
        createDeckOfCards(
            cardsArray,
            generateArrayOfRandomNumbers(cardsArray, amountOfCards),
            amountOfCards,
        ),
    );
    const [selectedCards, setSelectedCards] = useState([]);
    const [gameEnded, setGameEnded] = useState(false);
    const [gameResult, setGameResult] = useState("");

    // Check if the player won after each turn.
    useEffect(() => {
        if (selectedCards.length === deckOfCards.length) {
            setGameEnded(true);
            setGameResult("you won");
        }
    }, [selectedCards, deckOfCards]);

    return gameEnded ? (
        <PlayAgainScreen
            playAgain={playAgain}
            gameResult={gameResult}
            currentGifs={currentGifs}
            resetDefaultSongList={resetDefaultSongList}
            resetDefaultGifs={resetDefaultGifs}
            resetDefaultVoiceLine={resetDefaultVoiceLine}
        />
    ) : (
        <RenderCards
            deckOfCards={deckOfCards}
            shuffleDeck={shuffleDeck}
            takeTurn={takeTurn}
        />
    );
};

export default StartGame;
