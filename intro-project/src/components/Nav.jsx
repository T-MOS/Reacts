import Button from './Button.jsx';
// import './Nav.css'; // Assuming you have a CSS file for styling

export default function Nav(props) {
  // Determine which button to render based on homeSelected state
  // If homeSelected is true, render the About button; otherwise, render the Home button
  let buttonToRender;
  if (props.homeSelected) {
    buttonToRender = <Button id="About" onClick={props.onClick}><a href="/">About</a></Button>;
  } else {
    buttonToRender = <Button id="Home" onClick={props.onClick}>Home</Button>;
  }
  
  return (  
    <nav>
      <h1>Job{ props.wordChoice }</h1>
      <menu>
        {/* {props.homeSelected ? (
          <Button id="About" onClick={props.onClick}><a href="/">About</a></Button>
        ) : (
          <Button id="Home" onClick={props.onClick}>Home</Button> 
        )} */}
        {buttonToRender}
      </menu>
    </nav>
  );
}