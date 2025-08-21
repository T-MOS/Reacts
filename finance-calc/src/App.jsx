import Header from "./components/Header.jsx";
import UserInput from './components/UserInput.jsx';
import { useState } from "react";

function App() {

    return (
        <>
            <Header />
            <div id="body">
                <UserInput />
            </div>
        </>
    )
}

export default App
