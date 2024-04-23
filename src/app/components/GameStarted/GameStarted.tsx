import styles from "./GameStarted.module.scss"
import Button from "../Button";
import React, {useContext} from "react";
import { formatCurrency } from "../../../utils/formatUtils";
import {AppContext} from "../../context/AppContext";
import IconTooltip from "../IconTooltip";

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
            <div className={styles.container}>
                <h1 className={styles.title}>Mão do Dealer</h1>
                <h3>Card</h3>
                <h1 className={styles.title}>Sua mão</h1>
                <h3>Card</h3>
                <div>
                    <Button label="Comprar carta" onClick={() => true}/>
                    <Button label="Permanecer" onClick={() => true}/>
                    {isMobile && <IconTooltip />}
                </div>
            </div>
        </div>
    )
}

export default GameStarted