import styles from "./GameStarted.module.scss"
import Button from "../Button";
import React from "react";

const GameStarted = () => {
    return (
        <div className={styles.fullpage}>
            <div className={styles.sideContainer}>
                <img src="/hand-holding-card.webp" alt="Hand holding a card" className={styles.logo}/>
                <h1 className={styles.title}>BLACKJACK</h1>
                <p className={styles.text}>Chegue o mais perto possível <br/> de 21 sem ultrapassar!</p>
                <p className={styles.text}>Você tem XXX apostados nessa rodada</p>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>Mão do Dealer</h1>
                <h3>Card</h3>
                <h1 className={styles.title}>Sua mão</h1>
                <h3>Card</h3>
                <Button label="Comprar carta" onClick={() => true}/>
                <Button label="Permanecer" onClick={() => true}/>
            </div>
        </div>
    )
}

export default GameStarted