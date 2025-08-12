// const NOUNS = ["App", "Project", "Nav Bar"];
import { NOUNS } from '../data.js';
import Button from './Button.jsx';
 
function getRandomNoun(list) {
  return Math.floor(Math.random() * list.length);
}

export default function Nav(props) {
  return (  
    <nav>
      <h1>My { NOUNS[getRandomNoun(NOUNS)] }</h1>
      <menu>
        <Button onClick={props.onClick}><a href="/">Home</a></Button>
        <Button onClick={props.onClick}><a href="/about">About</a></Button>
      </menu>
    </nav>
  );
}