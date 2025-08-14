import Button from './Button.jsx';
// import './Nav.css'; // Assuming you have a CSS file for styling

export default function Nav(props) {
  return (  
    <nav>
      <h1>Job{ props.wordChoice }</h1>
      <menu>
        <Button id="Home" onClick={props.onClick}>Home</Button>
        {/* <Button id="About" onClick={props.onClick}><a href="/about">About</a></Button> */}
      </menu>
    </nav>
  );
}