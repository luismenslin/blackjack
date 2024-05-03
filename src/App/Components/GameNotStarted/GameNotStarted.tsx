import styles from "./GameNotStarted.module.scss"
import React, { Dispatch, SetStateAction } from "react";
import Button from "../Button";
import MoneyInput from "../MoneyInput";
import { formatCurrency } from "../../../utils/formatUtils";
import {isNumber} from "util";

interface GameNotStartedProps {
    betValue: number
    setBetValue: Dispatch<SetStateAction<number>>
    setIsGameStarted: Dispatch<SetStateAction<boolean>>
    valueOwn: number
    setValueOwn: Dispatch<SetStateAction<number>>
    isGameFinished: boolean
    setIsGameFinished: Dispatch<SetStateAction<boolean>>
}

const GameNotStarted = ({valueOwn, setBetValue, setIsGameStarted, betValue, setIsGameFinished, isGameFinished, setValueOwn}: GameNotStartedProps) => {
    const validateValue = (betValue: number | undefined): void => {
        if (betValue) setBetValue(betValue)
    }

    const resetGame = () => {
        setIsGameStarted(false);
        setIsGameFinished(false);
        setValueOwn(1000);
    };

    return (
        <div className={styles.container}>
            <img src="/hand-holding-card.webp" alt="Hand holding a card" className={styles.logo}/>
            <h1 className={styles.title}>BLACKJACK</h1>
            <br/>
            {!isGameFinished && (
                <>
                    <p className={styles.text}>Faça uma aposta<br/> Você tem {formatCurrency(valueOwn, true)}</p>
                    <MoneyInput onValueChange={validateValue}/>
                    <Button label={"Apostar e iniciar jogo!"} onClick={() => {
                        if (betValue <= 0 || betValue > valueOwn) {
                            alert("Da uma olhada nessa aposta ai meu parceiro ༼ つ ◕_◕ ༽つ");
                        } else {
                            setIsGameStarted(true);
                        }
                    }}
                    />
                </>
            )}
            {isGameFinished && (
                <>
                    <p className={styles.text}>Suas apostas zeraram<br/> Você perdeu o jogo contra o Dealer!</p>
                    <Button label={"Reiniciar jogo"} onClick={resetGame}/>
                </>
            )}
        </div>
    )
}

export default GameNotStarted