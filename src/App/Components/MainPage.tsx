import './MainPage.module.scss';
import React, {useEffect, useState} from "react";
import GameNotStarted from "./GameNotStarted";
import GameStarted from "./GameStarted";
import { AppContext } from '../context/AppContext';

const MainPage = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [valueOwn, setValueOwn] = useState(1000)
  const [betValue, setBetValue] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
      <AppContext.Provider value={{ isMobile }}>
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
      </AppContext.Provider>
  )
}

export { MainPage };