import { useState } from 'react';
import Nav from './Nav';
import { titleFinishers } from '../data.js';

export default function Header() {
    const [wordChoice, setWordChoice] = useState(" Report");
    const [homeSelected, setHomeSelected] = useState(false);

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
    }

    return (
        <div className="nav-container">
            <h1>Job{wordChoice}</h1>
            <Nav
                onClick={
                    (source) => {
                        handleClick(source);
                        if (source === "Home") {
                            handleWordChoice();
                            setHomeSelected(true);
                        }
                    }
                }
                wordChoice={wordChoice}
                homeSelected={homeSelected}
            />
        </div>
    );
}

