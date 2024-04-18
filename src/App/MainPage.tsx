import './MainPage.module.scss';
import {useState} from "react";
import GameNotStarted from "./Components/GameNotStarted";
import Card from "./Components/Card";

const MainPage = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
       <>
        {!isGameStarted &&
            <div>
                <GameNotStarted/>
            </div>
        }
      </>
  )
}

export { MainPage };
