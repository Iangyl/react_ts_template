import './App.css';
import reactPicture from '../public/react.svg';

const App = () => (
  <div className="App">
    <img src={reactPicture} alt="react" className="react-picture" />
    <div className="text">
      Hi, dude! Let`s coding!
      <div className="small-text">
        Made by Volodymyr Barybin (github: iangyl)
      </div>
    </div>
  </div>
);

export default App;
