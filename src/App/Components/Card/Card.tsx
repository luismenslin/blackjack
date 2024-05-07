import styles from  "./Card.module.scss"
import Suit from "../Suit";
import React, {useContext} from "react";
import cx from "classnames";
import {AppContext} from "../../context/AppContext";

export interface cardProps {
    suit: string
    number: string
    color: string
    isDown?: boolean
    handSize?: number
}

const Card = ({suit, number, color, isDown=false, handSize} : cardProps) => {
    const { isMobile } = useContext(AppContext)
    const cardMarginStyle = (handSize && handSize >= 3 && isMobile) ? styles.cardMargin : ''

    return (
       <>
           {isDown &&
               <div className={cx(styles.card, cardMarginStyle)}>
                    <div className={styles.cardDown}>
                        <div className={styles.cardDown}>
                        </div>
                    </div>
               </div>
           }

           {!isDown &&
               <div className={cx(styles.card, cardMarginStyle)}>
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
           }
       </>
    )
}
export default Card