import React, {useContext} from "react";
import { formatCurrency } from "../../../utils/formatUtils";
import GameActionsContainer from "./GameActionsContainer";
import {AppContext} from "../../context/AppContext";
import styles from "./GameStarted.module.scss"

interface GameStartedProps {
    betValue: number
}

const GameStarted = ({ betValue }: GameStartedProps) => {
    const { isMobile } = useContext(AppContext)

    return (
        <div className={styles.fullpage}>
            <div className={styles.sideContainer}>
                {!isMobile && <img src="/hand-holding-card.webp" alt="Hand holding a card" className={styles.logo}/>}
                <h1 className={styles.title}>BLACKJACK</h1>
                {!isMobile && < p className={styles.text}>Chegue o mais perto possível <br/> de 21 sem ultrapassar!</p>}
                <p className={styles.text}>Você tem {formatCurrency(betValue, true)} apostados nessa rodada</p>
            </div>
            <GameActionsContainer/>
        </div>
    )
}

export default GameStarted