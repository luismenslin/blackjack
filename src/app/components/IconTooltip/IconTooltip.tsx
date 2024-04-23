import styles from "../GameStarted/GameStarted.module.scss";
import React from "react";

const IconTooltip = () => {
return (
    <div>
        <i style={{color: "black"}} className="bi bi-question-square"></i>
        <p className={styles.text}>Chegue o mais perto possível <br/> de 21 sem ultrapassar!</p>
    </div>
  )
}

export default IconTooltip