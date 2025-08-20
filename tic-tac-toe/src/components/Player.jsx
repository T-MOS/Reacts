import { useState } from "react";

export default function Player({ initName, symbol, isActive, onNameChange }) {
    const [playerName, setPlayerName] = useState(initName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        if (isEditing) {
            onNameChange(symbol, playerName)
        }
        setIsEditing(wasEditing => !wasEditing);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";

    function handleChange(e) {
        const name = e.target.value;
        // console.log(e);
        setPlayerName(name);
    }

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
        btnCaption = "Enter";
    }

    // console.log("Player:", playerName, "Symbol:", symbol, "Is Active:", isActive);
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}