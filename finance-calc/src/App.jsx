import Header from "./components/Header.jsx";
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from "react";

function App() {
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
        <>
            <Header />
            <UserInput
                handleChange={handleChange}
                userInput={userInput}
            />
            <Results />
        </>
    )
}

export default App
