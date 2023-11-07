import React from "react";
import dices from "../Assets/Images/dices.png";
import styles from './startgame.module.css';

const StartGame = ({checkGameStarted}) => {
  return (
    <div className={styles.startgameContainer}>
      <div>
        <img src={dices} alt="dices" width={500}/>
      </div>
      <div>
        <h1 className={styles.heading}>Dice Game</h1>
        <button className={styles.playBtn} onClick={()=>checkGameStarted()}>Play now</button>
      </div>
    </div>
  );
};

export default StartGame;
