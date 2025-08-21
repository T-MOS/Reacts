import Header from "./components/Header.jsx";
import UserInput from './components/UserInput.jsx';
import { useState } from "react";

function App() {
    return (
        <>
            <Header />
            <div id="body">
                <div id="user-input">
                    <span className="input-group">
                        <UserInput />
                        <UserInput />
                    </span>
                    <div className="input-group">
                        <UserInput />
                        <UserInput />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
