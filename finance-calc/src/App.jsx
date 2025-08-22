import Header from "./components/Header.jsx";
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 100,
        annualInvestment: 15,
        expectedReturn: 10,
        duration: 5,
    })

    function handleChange(identifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [identifier]: Math.max(0, +newValue),
            }
        });
    }

    const inputIsValid = userInput.duration > 0;
    return (
        <>
            <Header />
            <UserInput
                handleChange={handleChange}
                userInput={userInput}
            />
            {inputIsValid ?
                <Results inputs={userInput}/>
                : <p className="center">Enter a positive duration.</p> }

        </>
    )
}

export default App
