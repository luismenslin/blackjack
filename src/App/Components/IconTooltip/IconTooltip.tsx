import React, {useState} from "react"
import styles from "./IconTooltip.module.scss"

const IconTooltip = () => {
    const [activeTooltip, setActiveTooltip] = useState(false)

    const handleTooltip = () => {
        setActiveTooltip(!activeTooltip)
    }

    return (
        <div className={styles.tooltipContainer}>
            <i
                style={{color: "black"}}
                className="bi bi-question-square"
                onClick={() => handleTooltip()}
            />
            {activeTooltip && <p className={styles.text}>Tente não <br/> ultrapassar 21</p>}
        </div>
      )
}

export default IconTooltip