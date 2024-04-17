import './MainPage.module.scss';
import {useState} from "react";
import GameNotStarted from "./Components/GameNotStarted";
import Card from "./Components/Card";

const MainPage = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
/*
*
* <>
        {!isGameStarted &&
            <div>
                <GameNotStarted/>
            </div>
        }
      </>
* */
  return (
      <Card/>
  )
}

export { MainPage };
