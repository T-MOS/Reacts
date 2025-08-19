import { useState } from "react"
export default function GameBoard({ board, onCellClick }) {
    const [gameBaord, setGameBoard] = useState();
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = "X"
            return updatedGameBoard;
        });
    }


    return <ol id="game-board">
        {initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={handleSelectSquare}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
        </li>)}
    </ol>
}