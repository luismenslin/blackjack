import styles from  "./Card.module.scss"
import Suit from "../Suit";
import React from "react";


const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.numberTop}>
                <div>9</div>
            </div>
            <div className={styles.suit}>
                <Suit suit={"clubs"}/>
            </div>
            <div className={styles.numberBottom}>
                <div>9</div>
            </div>
        </div>
    )
}
export default Card