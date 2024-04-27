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

  useEffect(() => {
    if (!isGameStarted) setBetValue(0)
  }, [isGameStarted]);

  return (
      <AppContext.Provider value={{ isMobile }}>
        {!isGameStarted &&
            <div>
              <GameNotStarted setIsGameStarted={setIsGameStarted} valueOwn={valueOwn} betValue={betValue} setBetValue={setBetValue} />
            </div>
        }
        {isGameStarted &&
            <div>
                <GameStarted betValue={betValue} setIsGameStarted={setIsGameStarted} setValueOwn={setValueOwn} />
            </div>
        }
      </AppContext.Provider>
  )
}

export { MainPage };
