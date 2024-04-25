import styles from "./GameStarted.module.scss"
import Button from "../Button";
import React from "react";
import { formatCurrency } from "../../../utils/formatUtils";
import GameActionsContainer from "./GameActionsContainer";

interface GameStartedProps {
    betValue: number
}

const GameStarted = ({ betValue }: GameStartedProps) => {
    return (
        <div className={styles.fullpage}>
            <div className={styles.sideContainer}>
                <img src="/hand-holding-card.webp" alt="Hand holding a card" className={styles.logo}/>
                <h1 className={styles.title}>BLACKJACK</h1>
                <p className={styles.text}>Chegue o mais perto possível <br/> de 21 sem ultrapassar!</p>
                <p className={styles.text}>Você tem {formatCurrency(betValue, true)} apostados nessa rodada</p>
            </div>
            <GameActionsContainer />
        </div>
    )
}

export default GameStarted