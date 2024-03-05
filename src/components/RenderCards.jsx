import Styles from "./../styles/RenderCards.module.css";
import cardBack from "/cards/card-backside.png";
import flipCardSFX from "./../assets/sound-effects/flipcard.mp3";

const RenderCards = ({ deckOfCards, shuffleDeck, takeTurn }) => {
    // Rotate the cards after the player chooses one.
    const rotateCards = () => {
        const cards = document.querySelectorAll(`.${Styles.card}`);
        cards.forEach((card) => {
            card.classList.add(`${Styles.rotate}`);
        });
        setTimeout(() => {
            cards.forEach((card) => {
                card.classList.remove(`${Styles.rotate}`);
            });
        }, 1600);
    };

    // SFX
    const flipCardEffect = new Audio(flipCardSFX);
    const playSoundEffect = () => {
        flipCardEffect.volume = "0.5";
        flipCardEffect.play();
        setTimeout(() => {
            flipCardEffect.currentTime = 0;
            flipCardEffect.play();
        }, 800);
    };

    const renderedCards = deckOfCards.map((card, index) => (
        <div
            className={Styles.card}
            key={index}
            onClick={() => {
                // If the turn returns 'true' DON'T play the rotate cards sound effect, if it doesn't return anything play the sound effect.
                takeTurn(card.cardName) ? "" : playSoundEffect();
                rotateCards();
                setTimeout(() => {
                    shuffleDeck();
                }, 800);
            }}
        >
            <div className={Styles.front}>
                <p>{card.cardName}</p>
                <img src={card.cardImage} alt={card.cardName} />
            </div>
            <div className={Styles.back}>
                <img src={cardBack} alt="Card's back" />
            </div>
        </div>
    ));

    return renderedCards;
};

export default RenderCards;
