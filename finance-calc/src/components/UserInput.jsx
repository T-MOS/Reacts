import { useState } from "react";

export default function UserInput({ label = "label" }) {
    const [text, setText] = useState();

    function handleChange(e) {
        const fieldText = e.target.value;

        setText(fieldText);

    }

    const inputField = <input type="number" value={text} onChange={handleChange}></input>

    return (
        <div id="user-input">
            <span>
                <label className="center">{label}</label>
                <p>{inputField}</p>
            </span>
        </div>
    );
}