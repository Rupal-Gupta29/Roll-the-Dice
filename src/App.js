import React, { useState } from 'react';
import StartGame from './Components/StartGame';
import './App.css'
import Game from './Components/Game';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const checkGameStarted=()=>{
setIsGameStarted(true);
  }

  return (
    <div className='appContainer'>
      {
        isGameStarted ? <Game/> : <StartGame checkGameStarted={checkGameStarted} />
      }
    
    </div>
  )
}

export default App