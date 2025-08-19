import { useState } from "react";
import Log from "./components/Log.jsx";
import Player from "./components/player.jsx"
import GameBoard from "./components/GameBoard.jsx";

function App() {
    const [activePlayer, setActivePlayer] = useState("X");
    const [movesMade, setMovesMade] = useState([]);

    function handleSelectSquare(rowIndex, colIndex) {
        setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
        setMovesMade((prevMoves) => {
            let curPlayer = "X";

            if (prevMoves.length > 0 && prevMoves[0].player === "X") {
                curPlayer = "O";
            }

            const updatedMoves = [
                { square: { row: rowIndex, col: colIndex }, player: curPlayer },
                ...prevMoves,
            ];

            return updatedMoves;
        })
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initName="Player 1" symbol="X" isActive={activePlayer === "X"} />
                    <Player initName="Player 2" symbol="O" isActive={activePlayer === "O"} />
                </ol>
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    turns={movesMade}
                />
                <Log moves={movesMade} />
            </div>
        </main>
    )
}

export default App
