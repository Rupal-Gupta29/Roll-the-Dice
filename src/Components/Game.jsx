import React, { useEffect, useState } from "react";
import NumberCards from "./NumberCards";
import styles from "./game.module.css";
import dice1 from "../Assets/Images/dice_1.png";
import dice2 from "../Assets/Images/dice_2.png";
import dice3 from "../Assets/Images/dice_3.png";
import dice4 from "../Assets/Images/dice_4.png";
import dice5 from "../Assets/Images/dice_5.png";
import dice6 from "../Assets/Images/dice_6.png";

const numbers = [1, 2, 3, 4, 5, 6];
const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

const Game = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceImg, setDiceImg] = useState(dice1);
  const [diceNum, setDiceNum] = useState(null);
  const [result, setResult] = useState(0);
  const [errorMsg, setErrMsg] = useState("");
  const [showRules, setShowRules] = useState(false);

  const getSelectedNumber = (num) => {
    setSelectedNumber(num);
  };

  const handleDice = () => {
    if (selectedNumber === null) {
      setErrMsg("You have not selected any number!!");
    } else {
      setErrMsg("");
      let random = Math.floor(Math.random() * dices.length);
      setDiceImg(dices[random]);
      setDiceNum(random + 1);
    }
  };

  useEffect(() => {
    console.log(selectedNumber, diceNum, result);
    if (selectedNumber && diceNum) {
      if (selectedNumber === diceNum) {
        console.log("equal");
        setResult((prev) => prev + selectedNumber);
      } else {
        console.log("not equal");
        setResult((prev) => prev - 2);
      }
      setSelectedNumber(null);
      setDiceNum(null);
    }
  }, [diceNum, selectedNumber, result]);

  const handleReset = () => {
    setResult(0);
    setSelectedNumber(null);
    setDiceNum(null);
    setDiceImg(dice1);
  };

  return (
    <div>
      <header className={styles.headerContainer}>
        <div className={styles.scoreContainer}>
          <div className={styles.score}>{result}</div>
          <div>
            <strong>Total Score</strong>
          </div>
        </div>
        <div className={styles.cardsMainContainer}>
          <div className={styles.cardsContainer}>
            {numbers.map((num) => (
              <NumberCards
                num={num}
                key={num}
                isSelected={num === selectedNumber}
                getSelectedNumber={getSelectedNumber}
              />
            ))}
          </div>
          <div className={styles.errorMsg}>{errorMsg}</div>
          <div>
            <strong>Select Number</strong>
          </div>
        </div>
      </header>
      <main className={styles.mainContainer}>
        <div className={styles.gameContainer}>
          <img
            src={diceImg}
            alt="dice-number"
            width={150}
            onClick={handleDice}
          />
          <h3>Click on dice to roll</h3>
          <div className={styles.btnContainer}>
            <button
              className={styles.btn + " " + styles.resetBtn}
              onClick={handleReset}
            >
              Reset Score
            </button>
            <button
              className={styles.btn + " " + styles.rulesBtn}
              onClick={() => {
                setShowRules(!showRules);
              }}
            >
              {showRules ? "Hide Rules" : "Show Rules"}
            </button>
          </div>
        </div>
        {showRules && (
          <div className={styles.rulesContainer}>
            <h3>To begin the game, follow these steps:</h3>
            <ol>
              <li>Choose a number from the available options.</li>
              <li>Click on the dice image to roll it.</li>
              <li>
                If the number you selected matches the result of the dice roll,
                you will earn points equivalent to the dice value.
              </li>
              <li>
                If your chosen number doesn't match the dice result, you will
                lose 2 points.
              </li>
            </ol>
          </div>
        )}
      </main>
    </div>
  );
};

export default Game;
