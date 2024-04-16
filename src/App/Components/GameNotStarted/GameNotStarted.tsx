import styles from "./GameNotStarted.module.scss"
import React, {useState} from "react";
import Button from "../Button";
import MoneyInput from "../MoneyInput";

const GameNotStarted = () => {
    const [value, setValue] = useState('1000')
    const validateValue = (value: string | undefined): void => {
        if (value) setValue(value)
    }

    return (
        <div className={styles.container}>
            <img src="/hand-holding-card.webp" alt="Hand holding a card" className={styles.logo}/>
            <h1 className={styles.title}>BLACKJACK</h1>
            <p className={styles.text}>Faça uma aposta<br/> Você tem R$100</p>
            <br/>
            <br/>
            <MoneyInput onValueChange={validateValue} />
            <Button label={"Apostar e iniciar jogo!"} onClick={ () => console.log("Tem que mudar para o outro status")}/>
        </div>
    )
}

export default GameNotStarted