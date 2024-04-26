import styles from "./GameActionsContainer.module.scss"
import Card from "../Card";
import Button from "../Button";
import {useContext, useEffect, useState} from "react";
import deck from "../deck.json"
import {cardProps} from "../Card/Card";
import IconTooltip from "../IconTooltip";
import {AppContext} from "../../context/AppContext";

const GameActionsContainer = () => {
    const { isMobile } = useContext(AppContext)
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

            if (i === 0) {
                randomCard.isDown = true;
            }

            setDealerHand(prevHand => [...prevHand, randomCard]);
        }

        for (let i: number = 0; i < 2; i++) {
            const { randomCard, updatedList: newList } = getRandomCardAndUpdateDeckList(updatedList);
            updatedList = newList;
            setPlayerHand(prevHand => [...prevHand, randomCard]);
        }

        setDeckList(() => updatedList);

    }, []);

    const handleBuyCardClick = () => {
        const { randomCard, updatedList } = getRandomCardAndUpdateDeckList(deckList);
        setPlayerHand(prevHand => [...prevHand, randomCard]);
        setDeckList(() => updatedList);
    }

    const convertCardNumberToValue = (number: string): number => {
        if (['J', 'Q', 'K'].includes(number)) {
            return 10;
        }
        else if (number === 'A') {
            return 11;
        }
        else {
            return parseInt(number);
        }
    };

    const calculateHandSum = (hand: cardProps[]): number => {
        let sum = 0;
        for (const card of hand) {
            sum += convertCardNumberToValue(card.number);
        }
        return sum;
    };

    const calculateDealerHandSum = (hand: cardProps[], considerIsDown: boolean = false): number => {
        let sum = 0;
        for (const card of hand) {
            if (!card.isDown) {
                sum += convertCardNumberToValue(card.number);
            }
        }
        return sum;
    };


    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>Mão do Dealer ({calculateDealerHandSum(dealerHand)})</h1>
            </div>

            <div className={styles.handDeck}>
                {dealerHand.map((cardData, index) => (
                    <Card
                        key={index}
                        suit={cardData.suit}
                        number={cardData.number}
                        color={cardData.color}
                        isDown={cardData.isDown}
                    />
                ))}
            </div>

            <div>
                <h1 className={styles.title}>Sua mão ({calculateHandSum(playerHand)})</h1>
            </div>

            <div className={styles.handDeck}>
                {playerHand.map((cardData, index) => (
                    <Card
                        key={index}
                        suit={cardData.suit}
                        number={cardData.number}
                        color={cardData.color}
                    />
                ))}
            </div>
            <Button label="Comprar carta" onClick={handleBuyCardClick}/>
            <Button label="Permanecer" onClick={() => true}/>
            {isMobile && <IconTooltip />}
        </div>
    )
}

export default GameActionsContainer