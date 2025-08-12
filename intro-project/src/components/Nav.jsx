// const NOUNS = ["App", "Project", "Nav Bar"];
import { NOUNS } from '../data.js';


function getRandomNoun(list) {
  return Math.floor(Math.random() * list.length);
}

export default function Nav(props) {
  return (  
    <nav>
      <h1>My { NOUNS[getRandomNoun(NOUNS)] }</h1>
      <ul>
        <li><p></p><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}