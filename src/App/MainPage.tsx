import './MainPage.module.scss';
import React, { useState } from "react";
import GameNotStarted from "./Components/GameNotStarted";
import GameStarted from "./Components/GameStarted";

const MainPage = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [valueOwn, setValueOwn] = useState(1000)
  const [betValue, setBetValue] = useState(0)

  return (
      <>
        {!isGameStarted &&
            <div>
              <GameNotStarted setIsGameStarted={setIsGameStarted} valueOwn={valueOwn} setBetValue={setBetValue} />
            </div>
        }
        {isGameStarted &&
            <div>
                <GameStarted betValue={betValue} />
            </div>
        }
      </>
  )
}

export { MainPage };
