import { useState } from "react";

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    })

    function handleChange(identifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [identifier]: newValue,
            }
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>"Initial Investment"</label>
                    <input
                        type="number"
                        required
                        value={userInput}
                        onChange={() => handleChange("initialInvestment", e.target.value)}>
                    </input>
                </p>
                <p>
                    <label>"Annual Investment"</label>
                    <input
                        type="number"
                        required
                        value={userInput}
                        onChange={() => handleChange("annualInvestment", e.target.value)}>
                    </input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>"Expected Return"</label>
                    <input
                        type="number"
                        required
                        value={userInput}
                        onChange={() => handleChange("expectedReturn", e.target.value)}>
                    </input>
                </p>
                <p>
                    <label>, "Duration"</label>
                    <input
                        type="number"
                        required
                        value={userInput}
                        onChange={() => handleChange("duration", e.target.value)}>
                    </input>
                </p>
            </div>
        </section>
    );
}