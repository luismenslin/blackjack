import styles from  "./Card.module.scss"
import Suit from "../Suit";
import React from "react";

export interface cardProps {
    suit: string
    number: string
    color: string
}

const Card = ({suit, number, color} : cardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.numberTop}>
                <div style={{color: color}}>{number}</div>
            </div>
            <div className={styles.suit}>
                <Suit suit={suit}/>
            </div>
            <div className={styles.numberBottom}>
                <div style={{color: color}}>{number}</div>
            </div>
        </div>
    )
}
export default Card