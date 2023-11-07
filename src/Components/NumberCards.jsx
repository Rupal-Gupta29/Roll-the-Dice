import React from "react";
import styles from "./numbercards.module.css";

const NumberCards = ({ num, getSelectedNumber, isSelected }) => {


  return (
    <div className={isSelected? styles.cards +" "+styles.activeCard : styles.cards} onClick={()=> getSelectedNumber(num)}>
      {num}
    </div>
  );
};

export default NumberCards;
