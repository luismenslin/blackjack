import styles from "./GameActionsContainer.module.scss"
import Card from "../Card";
import Button from "../Button";
import {useContext, useEffect, useState} from "react";
import deck from "../deck.json"
import {cardProps} from "../Card/Card";
import IconTooltip from "../IconTooltip";
import {AppContext} from "../../context/AppContext";
import React  from 'react';

interface GameActionsContainerProps {
    setIsGameStarted: (isGameStarted: boolean) => void
    setValueOwn: (valueOwn: (prevValue: number) => number) => void
    betValue: number
}

const GameActionsContainer = ({setIsGameStarted, setValueOwn, betValue} : GameActionsContainerProps) => {
    const { isMobile } = useContext(AppContext)
    const [deckList, setDeckList] = useState(deck)
    const [dealerHand, setDealerHand] = useState<cardProps[]>([]);
    const [playerHand, setPlayerHand] = useState<cardProps[]>([]);
    const [sumPlayerHand, setSumPlayerHand] = useState(0);
    const [sumDealerHand, setSumDealerHand] = useState(0);
    const [isGameLost, setIsGameLost] = useState(false)
    const [isGameWon, setIsGameWon] = useState(false)
    const [isGameDraw, setIsGameDraw] = useState(false)

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

            if (randomCard.isDown) randomCard.isDown = false;
            if (i === 0) randomCard.isDown = true;

            updatedList = newList;

            setDealerHand(prevHand => [...prevHand, randomCard]);
        }

        for (let i: number = 0; i < 2; i++) {
            const { randomCard, updatedList: newList } = getRandomCardAndUpdateDeckList(updatedList);
            updatedList = newList;
            setPlayerHand(prevHand => [...prevHand, randomCard]);
        }

        setDeckList(updatedList);
    }, []);

    useEffect(() => {
        setSumPlayerHand(calculateHandSum(playerHand));
        setSumDealerHand(calculateDealerHandSum(dealerHand));
    }, [playerHand, dealerHand]);

    useEffect(() => {
        if (sumPlayerHand > 21) {
            setIsGameLost(true)
            setValueOwn((prevValue: number) => prevValue - betValue);
            setDealerHand(prevHand => prevHand.map(card => ({ ...card, isDown: false })));
        }
    }, [sumPlayerHand]);

    useEffect(() => {
        if (sumDealerHand > 21) {
            setIsGameWon(true)
            setValueOwn((prevValue: number) => prevValue - betValue);
        }
    }, [sumDealerHand]);

    const handleBuyCardClick = () => {
        const { randomCard, updatedList } = getRandomCardAndUpdateDeckList(deckList);
        setPlayerHand(prevHand => [...prevHand, randomCard]);
        setDeckList(() => updatedList);
    }

    const buyDealerCard = () => {
        const { randomCard, updatedList } = getRandomCardAndUpdateDeckList(deckList);
        const newDealerHand = [...dealerHand, randomCard];
        setDealerHand(newDealerHand);
        setDeckList(() => updatedList);
        return newDealerHand;
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

    const calculateDealerHandSum = (hand: cardProps[]): number => {
        let sum = 0;
        for (const card of hand) {
            if (!card.isDown) {
                sum += convertCardNumberToValue(card.number);
            }
        }
        return sum;
    };

    const handleDealerCardsBuy = (sumFullDealerHand: number) => {
        let willDealerHit = true;
        while (willDealerHit) {
            const chance = Math.floor(Math.random() * 101)
            let percDealerHit = 0;

            switch (sumFullDealerHand) {
                case 12:
                    percDealerHit = 90;
                    break
                case 13:
                    percDealerHit = 70;
                    break
                case 14:
                    percDealerHit = 50;
                    break
                case 15:
                    percDealerHit = 40;
                    break
                case 16:
                    percDealerHit = 30;
                    break
                case 17:
                    percDealerHit = 15;
                    break
                case 18:
                    percDealerHit = 10;
                    break
                case 19:
                    percDealerHit = 5;
                    break
                case 20:
                    percDealerHit = 2;
                    break
                case 21:
                    percDealerHit = 0;
                    break
                default:
                    if (sumFullDealerHand <= 11) {
                        percDealerHit = 100;
                    }
                    if (sumFullDealerHand > 21) {
                        percDealerHit = 0;
                    }
            }

            if (chance <= percDealerHit) {
                const newDealerHand = buyDealerCard();
                sumFullDealerHand = calculateDealerHandSum(newDealerHand);
            } else {
                willDealerHit = false;
            }
        }

        return sumFullDealerHand
    }

    const handleStandOption = () => {
        const fullDealerHand = dealerHand.map(card => ({ ...card, isDown: false }));
        let sumFullDealerHand = calculateDealerHandSum(fullDealerHand);
        sumFullDealerHand = handleDealerCardsBuy(sumFullDealerHand);

        if (sumPlayerHand < sumFullDealerHand && sumFullDealerHand <= 21) {
            setIsGameLost(true);
            setValueOwn((prevValue: number) => prevValue - betValue);
            return
        }

        if (sumPlayerHand > sumFullDealerHand && sumPlayerHand <= 21) {
            setIsGameWon(true);
            setValueOwn((prevValue: number) => prevValue + betValue);
            return
        }

        setSumDealerHand(sumFullDealerHand)
        setIsGameDraw(true);
        setDealerHand(fullDealerHand);
    }

    const handleResetGame = () => {
        resetStates();
        setIsGameStarted(false);
    }

    const resetStates = () => {
        setDealerHand([]);
        setPlayerHand([]);
        setSumPlayerHand(0);
        setSumDealerHand(0);
        setIsGameLost(false);
        setIsGameWon(false);
        setIsGameDraw(false);
        setDeckList(deck);
    }

    const getResultText = isGameWon ? "Você ganhou essa rodada!" : isGameLost ? "Você perdeu essa rodada!" : "Você empatou essa rodada!";

    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>Mão do Dealer ({sumDealerHand})</h1>
            </div>

            <div className={styles.handDeck}>
                {dealerHand.map((cardData) => (
                    <Card
                        key={cardData.suit + cardData.number}
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

            {!(isGameLost || isGameWon || isGameDraw) &&
                <>
                    <Button label="Comprar carta" onClick={handleBuyCardClick}/>
                    <Button label="Permanecer" onClick={handleStandOption}/>
                </>
            }
            {(isGameLost || isGameWon || isGameDraw) &&
                <>
                    <h2 className={styles.resultText}>{getResultText}</h2>
                    <Button label={"Voltar as apostas"} onClick={() => handleResetGame()}/>
                </>
            }
            {isMobile && <IconTooltip />}
        </div>
    )
}

export default GameActionsContainer