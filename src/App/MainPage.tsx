import './MainPage.module.scss';
import React, { useState } from "react";
import GameNotStarted from "./Components/GameNotStarted";
import GameStarted from "./Components/GameStarted";

const MainPage = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
      <>
        {!isGameStarted &&
            <div>
              <GameNotStarted setIsGameStarted={setIsGameStarted}/>
            </div>
        }
        {isGameStarted &&
            <div>
                <GameStarted/>
            </div>
        }
      </>
  )
}

export { MainPage };
