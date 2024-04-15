import './MainPage.module.scss';
import {useState} from "react";
import GameNotStarted from "./Components/GameNotStarted";

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
