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
      <div>
        <Card number={9} color={"black"} suit={"clubs"}/>
        <Card number={9} color={"red"} suit={"hearts"}/>
        <Card number={9} color={"black"} suit={"spades"}/>
        <Card number={9} color={"red"} suit={"diamond"}/>
      </div>
  )
}

export { MainPage };
