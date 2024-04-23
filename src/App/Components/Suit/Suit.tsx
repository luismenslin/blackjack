import styles from "./Suit.module.scss"

interface suitProps {
    suit: string
}

const Suit = ({suit}: suitProps) => {
    return (
        <>
            {suit === "clubs" && (
                <div className="suit">
                    <i style={{color: "black"}} className="bi bi-suit-club-fill"></i>
                </div>
            )}
            {suit === "hearts" && (
                <div className="suit">
                    <i style={{color: "red"}} className="bi bi-suit-heart-fill"></i>
                </div>
            )}
            {suit === "spades" && (
                <div className="suit">
                    <i style={{color: "black"}} className="bi bi-suit-spade-fill"></i>
                </div>
            )}
            {suit === "diamonds" && (
                <div className="suit">
                    <i style={{color: "red"}} className="bi bi-suit-diamond-fill"></i>
                </div>
            )}
        </>
    )
}
export default Suit