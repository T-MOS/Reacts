import { useState } from "react";
import Log from "./components/Log.jsx";
import Player from "./components/player.jsx"
import GameOver from "./components/GameOver.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { WIN_STATES } from "./win_states.js";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function deriveActivePlayer(movesMade) {
    let curPlayer = "X";

    if (movesMade.length > 0 && movesMade[0].player === "X") {
        curPlayer = "O";
    }
    return curPlayer;
}

function App() {
    const [movesMade, setMovesMade] = useState([]);

    let gameBoard = initialGameBoard;

    for (const turn of movesMade) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    let winner;

    for (const winState of WIN_STATES) {
        const [first, second, third] = winState;
        const firstSymbol = gameBoard[first.row][first.column];
        const secondSymbol = gameBoard[second.row][second.column];
        const thirdSymbol = gameBoard[third.row][third.column];

        if (
            firstSymbol 
            && firstSymbol === secondSymbol 
            && firstSymbol === thirdSymbol) {
            winner = firstSymbol;
            break;
        }
    }

    const isDraw = movesMade.length === 9 && !winner;

    const activePlayer = deriveActivePlayer(movesMade);

    function handleSelectSquare(rowIndex, colIndex) {
        setMovesMade((prevMoves) => {
            const curPlayer = activePlayer;

            const updatedMoves = [
                { square: { row: rowIndex, col: colIndex }, player: curPlayer },
                ...prevMoves,
            ];
            console.log(updatedMoves.length)
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
                {(winner || isDraw) && <GameOver winner={winner} />}
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
            </div>
            <Log moves={movesMade} />

        </main>
    )
}

export default App
