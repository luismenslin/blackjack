import styles from "./GameActionsContainer.module.scss"
import Card from "../Card";
import Button from "../Button";
import {useEffect, useState} from "react";
import deck from "../../deck.json"
import {cardProps} from "../Card/Card";

const GameActionsContainer = () => {

    const [deckList, setDeckList] = useState(deck)
    const [dealerHand, setDealerHand] = useState<cardProps[]>([]);
    const [playerHand, setPlayerHand] = useState<cardProps[]>([]);

    const getRandomCardAndUpdateDeckList = (deckList: cardProps[]): { randomCard: cardProps, updatedList: cardProps[] } => {
        const randomIndex = Math.floor(Math.random() * deckList.length);
        const randomCard = deckList[randomIndex];
        const updatedList = [
            ...deckList.slice(0, randomIndex),
            ...deckList.slice(randomIndex + 1)
        ];
        return { randomCard, updatedList };
    }

    useEffect(() => {
        let updatedList = deckList;
        for (let i = 0; i < 2; i++) {
            const { randomCard, updatedList: newList } = getRandomCardAndUpdateDeckList(updatedList);
            updatedList = newList;
            setDealerHand(prevHand => [...prevHand, randomCard]);
        }

        for (let i: number = 0; i < 2; i++) {
            const { randomCard, updatedList: newList } = getRandomCardAndUpdateDeckList(updatedList);
            updatedList = newList;
            setPlayerHand(prevHand => [...prevHand, randomCard]);
        }

        setDeckList(() => updatedList);

    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mão do Dealer</h1>

            <div className={styles.handDeck}>
                {dealerHand.map((cardData, index) => (
                    <Card
                        key={index} // Ensure each card has a unique key
                        suit={cardData.suit}
                        number={cardData.number}
                        color={cardData.color}
                    />
                ))}
            </div>

            <h1 className={styles.title}>Sua mão</h1>

            <div className={styles.handDeck}>
                {playerHand.map((cardData, index) => (
                    <Card
                        key={index} // Ensure each card has a unique key
                        suit={cardData.suit}
                        number={cardData.number}
                        color={cardData.color}
                    />
                ))}
            </div>

            <Button label="Comprar carta" onClick={() => true}/>
            <Button label="Permanecer" onClick={() => true}/>
        </div>
    )
}

export default GameActionsContainer