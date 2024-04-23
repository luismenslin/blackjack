import styles from "./GameStarted.module.scss";
import Card from "../Card";
import Button from "../Button";
import {useEffect, useState} from "react";
import deck from "../../deck.json"

const GameActionsContainer = () => {

    const [deckList, setDeckList] = useState(deck)
    const [playerHand, setPlayerHand] = useState([])
    const [dealerHand, setDealerHand] = useState([])

    console.log(deckList)

    const getRandomCardAndUpdateDeckList = () => {
        //gerando index aleatorio
        const randomIndex = Math.floor(Math.random() * deckList.length);
        // pega o item daquele index
        const randomCard = deckList[randomIndex];
        //... = spread operator
        //remove e adiciona o restante dos elementos da lista em uma nova lista updatedList
        const updatedList = [...deckList.slice(0, randomIndex), ...deckList.slice(randomIndex + 1)];
        setDeckList(updatedList)

        return randomCard
    }

    useEffect(() => {
        for (let i: number = 0; i<2; i++) {
            setDealerHand([getRandomCardAndUpdateDeckList(), getRandomCardAndUpdateDeckList()])
        }
        const randomCard = getRandomCardAndUpdateDeckList()


    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mão do Dealer</h1>
            <Card color={"red"} number="9" suit={"hearts"}/>
            <h1 className={styles.title}>Sua mão</h1>
            <Card color={"red"} number="9" suit={"hearts"}/>
            <Button label="Comprar carta" onClick={() => true}/>
            <Button label="Permanecer" onClick={() => true}/>
        </div>
    )
}

export default GameActionsContainer