import styles from "./GameNotStarted.module.scss"
import React, { Dispatch, SetStateAction } from "react";
import Button from "../Button";
import MoneyInput from "../MoneyInput";
import { formatCurrency } from "../../../utils/formatUtils";

interface GameNotStartedProps {
    setBetValue: Dispatch<SetStateAction<number>>
    setIsGameStarted: Dispatch<SetStateAction<boolean>>
    valueOwn: number
}

const GameNotStarted = ({valueOwn, setBetValue, setIsGameStarted}: GameNotStartedProps) => {
    const validateValue = (betValue: number | undefined): void => {
        if (betValue) setBetValue(betValue)
    }

    return (
        <div className={styles.container}>
            <img src="/hand-holding-card.webp" alt="Hand holding a card" className={styles.logo}/>
            <h1 className={styles.title}>BLACKJACK</h1>
            <p className={styles.text}>Faça uma aposta<br/> Você tem {formatCurrency(valueOwn, true)}</p>
            <br/>
            <MoneyInput onValueChange={validateValue} />
            <Button label={"Apostar e iniciar jogo!"} onClick={() => setIsGameStarted(true)}/>
        </div>
    )
}

export default GameNotStarted