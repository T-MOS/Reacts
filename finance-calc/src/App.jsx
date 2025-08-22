import Header from "./components/Header.jsx";
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 100,
        annualInvestment: 15,
        expectedReturn: 10,
        duration: 1,
    })

    function handleChange(identifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [identifier]: Number(newValue),
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
            <Results inputs={userInput}/>
        </>
    )
}

export default App
