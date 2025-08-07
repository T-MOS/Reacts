import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const nouns = ["App", "Project", "Nav Bar"];

function getRandomNoun(list) {
  return Math.floor(Math.random() * list.length);
}

function Nav() {
  const noun = getRandomNoun(nouns);
  return (  
    <nav>
      <h1>My {nouns[Math.floor(Math.random() * nouns.length)]}</h1>
      <ul>
        <li><p></p><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="nav-container">
        <Nav />
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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