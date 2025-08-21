import Header from "./components/Header.jsx";
import UserInput from './components/UserInput.jsx';
import { useState } from "react";

const LABELS = ["Initial Investment", "Annual Investment", "Expected Return", "Duration"]

function App() {
    // TODO: figure out how to bundle the input values together...

    // const [fieldValues, setFieldValues] = useState({
    //     initialInvestment: "",
    //     annualInvesment: "",
    //     return: "",
    //     duration: "",
    // })

    // const [fieldValues, setFieldValues] = useState(new Map())
    
    // function handleValueChange(label, numberString) {
    //     // fieldValues.set(`${label}`, numberString);
    //     setFieldValues(() => {

    //     })
    // }

    return (
        <>
            <Header />
            <div id="body">
                <div id="user-input">
                    <span className="input-group">
                        <UserInput
                            label={LABELS[0]}
                            onValueChange={handleValueChange}
                        />
                        <UserInput
                            label={LABELS[1]}
                            onValueChange={handleValueChange}
                        />
                    </span>
                    <div className="input-group">
                        <UserInput
                            label={LABELS[2]}
                            onValueChange={handleValueChange}
                        />
                        <UserInput
                            label={LABELS[3]}
                            onValueChange={handleValueChange}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
