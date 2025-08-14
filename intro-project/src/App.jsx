import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav.jsx'
import Button from './components/Button.jsx'
import { titleFinishers } from './data.js'

function App() {
  const [wordChoice, setWordChoice] = useState(" Report")

  function handleClick(source) {
    console.log(`${source} button clicked!`);
  }
  function handleWordChoice() {
    const randomIndex = () => Math.floor(Math.random() * titleFinishers.length);
    let idx = randomIndex();

    // Ensure the new word choice is different from the current one
    while (titleFinishers[idx] === wordChoice) {
      idx = randomIndex();
    }

    // Set a new random word choice from titleFinishers
    setWordChoice(titleFinishers[idx]);
    console.log(`Word choice changed to: ${titleFinishers[idx]}`);
  }

  return (
    <>
      <div className="nav-container">
        <Nav 
          onClick={
          (source) => {
            handleClick(source);
            if (source === "Home") {
              handleWordChoice();
            }
          }}
          wordChoice={wordChoice}
        />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => handleClick("Default")}><p>Default</p></Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App