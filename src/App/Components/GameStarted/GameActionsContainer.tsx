import styles from "./GameActionsContainer.module.scss"
import Card from "../Card";
import Button from "../Button";
import {useContext, useEffect, useState} from "react";
import deck from "../deck.json"
import {cardProps} from "../Card/Card";
import IconTooltip from "../IconTooltip";
import {AppContext} from "../../context/AppContext";

interface GameActionsContainerProps {
    setIsGameStarted: (isGameStarted: boolean) => void
}

const GameActionsContainer = ({setIsGameStarted} : GameActionsContainerProps) => {
    const { isMobile } = useContext(AppContext)
    const [deckList, setDeckList] = useState(deck)
    const [dealerHand, setDealerHand] = useState<cardProps[]>([]);
    const [playerHand, setPlayerHand] = useState<cardProps[]>([]);
    const [sumPlayerHand, setSumPlayerHand] = useState(0);
    const [sumDealerHand, setSumDealerHand] = useState(0);
    const [isGameLost, setIsGameLost] = useState(false)

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

    useEffect(() => {
        setSumPlayerHand(calculateHandSum(playerHand));
        setSumDealerHand(calculateDealerHandSum(dealerHand));
    }, [playerHand, dealerHand]);

    useEffect(() => {
        if (sumPlayerHand > 21) {
            setIsGameLost(true)
        }
    }, [sumPlayerHand]);

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
                <h1 className={styles.title}>Mão do Dealer ({sumDealerHand})</h1>
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
                <h1 className={styles.title}>Sua mão ({sumPlayerHand})</h1>
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

            {!isGameLost &&
                <>
                    <Button label="Comprar carta" onClick={handleBuyCardClick}/>
                    <Button label="Permanecer" onClick={() => true}/>
                </>
            }
            {isGameLost &&
                <>
                    <h2 className={styles.resultText}>Você perdeu essa rodada!</h2>
                    <Button label={"Voltar as apostas"} onClick={() => setIsGameStarted(false)}/>
                </>
            }
            {isMobile && <IconTooltip />}
        </div>
    )
}
export default GameActionsContainer