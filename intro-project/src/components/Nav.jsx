export default function Nav() {
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