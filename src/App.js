import { useState } from 'react';
import './App.css';
import HomePage from './Components/Pages/HomePage';
import StartPage from './Components/Pages/StartPage';


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  function toggleGameStarted(){
    setIsGameStarted(!isGameStarted);
  }
  return (
    <div className="App">
    {
      isGameStarted ? <HomePage/> : <StartPage toggle = {toggleGameStarted}/>
    }
    </div>
  );
}

export default App;
