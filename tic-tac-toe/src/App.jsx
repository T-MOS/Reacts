import { useState } from "react";
import Log from "./components/Log.jsx";
import Player from "./components/player.jsx";
import GameOver from "./components/GameOver.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { WIN_STATES } from "./win_states.js";

const PLAYERS = {
    X: "Player 1",
    O: "Player 2",

}

const INITIAL_GAME_BOARD = [
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

function deriveWinner(gameBoard, players) {
    let winner;

    for (const winState of WIN_STATES) {
        const [first, second, third] = winState;
        const firstSymbol = gameBoard[first.row][first.column];
        const secondSymbol = gameBoard[second.row][second.column];
        const thirdSymbol = gameBoard[third.row][third.column];

        if (
            firstSymbol
            && firstSymbol === secondSymbol
            && firstSymbol === thirdSymbol
        ) {
            winner = players[firstSymbol];
        }
    }

    return winner;
}

function deriveGameBoard(movesMade) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

    for (const turn of movesMade) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}
function App() {
    const [players, setPlayers] = useState({
        X: "Player 1",
        O: "Player 2",
    });

    const [movesMade, setMovesMade] = useState([]);

    let gameBoard = deriveGameBoard(movesMade);

    let winner = deriveWinner(gameBoard, players);

    const isDraw = movesMade.length === 9 && !winner;

    const activePlayer = deriveActivePlayer(movesMade);

    function handleSelectSquare(rowIndex, colIndex) {
        setMovesMade((prevMoves) => {
            const curPlayer = activePlayer;

            const updatedMoves = [
                { square: { row: rowIndex, col: colIndex }, player: curPlayer },
                ...prevMoves,
            ];
            return updatedMoves;
        })
    }

    function handleRestart() {
        setMovesMade([])
    }

    function handleNameChange(symbol, newName) {
        setPlayers(prevPlayers => {
            return {
                ...prevPlayers,
                [symbol]: newName,
            }
        })
    }
    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initName={PLAYERS.O}
                        symbol="X"
                        isActive={activePlayer === "X"}
                        onNameChange={handleNameChange}
                    />
                    <Player
                        initName={PLAYERS.X}
                        symbol="O"
                        isActive={activePlayer === "O"}
                        onNameChange={handleNameChange}
                    />
                </ol>
                {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
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
