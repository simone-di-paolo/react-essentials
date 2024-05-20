import reactLogo from '../../assets/react.svg'
import './Header.css'

const reactDescriptions = ['Fundamentals', 'Components', 'Hooks'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header () {
    const description = reactDescriptions[getRandomInt(reactDescriptions.length)];
    return (
      <header>
        <img src={reactLogo}></img>
        <h1> React Essentials</h1>
        <p>
            {description} React concepts you will need for almost any app you're going to build!
        </p>
      </header>
    );
  }