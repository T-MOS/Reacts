import { useState } from "react";

export default function UserInput({ label, onValueChange, key }) {
    const [text, setText] = useState();

    function handleChange(e) {
        const fieldText = e.target.value;
        onValueChange(label, fieldText)
        setText(fieldText);
    }

    const inputField = <input type="number" value={text} onChange={handleChange}></input>

    return (
        <div id="user-input">
            <span>
                <label>{label}</label>
                <p>{inputField}</p>
            </span>
        </div>
    );
}