import styles from "./GameNotStarted.module.scss"
import React from "react";
import Button from "../Button";

const GameNotStarted = () => {
    return (
        <div className={styles.container}>
            <img src="/hand-holding-card.webp" alt="Hand holding a card" className={styles.logo}/>
            <h1 className={styles.title}>BLACKJACK</h1>
            <p className={styles.text}>Faça uma aposta<br/> Você tem R$100</p>
            <br/>
            <br/>
            <Button label={"Apostar e iniciar jogo!"} onClick={ () => console.log("Tem que mudar para o outro status")}/>
        </div>
    )
}

export default GameNotStarted