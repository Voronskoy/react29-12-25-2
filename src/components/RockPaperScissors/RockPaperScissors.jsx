import _ from "lodash";
import React, { useState } from "react";
import styles from "./RockPaperScissors.module.css";
const RockPaperScissors = () => {
  const choices = ["Камінь", "Ножиці", "Папір"];
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [result, setResult] = useState("");
  const calcResult = (user, comp) => {
    if (user === comp) {
      setResult("Нічія");
    } else if (
      (user === "Ножиці" && comp === "Папір") ||
      (user === "Папір" && comp === "Камінь") ||
      (user === "Камінь" && comp === "Ножиці")
    ) {
      setResult("Ти переміг! 🎉");
    } else {
      setResult("Комп’ютер переміг 😢");
    }
  };

  const game = (choice) => {
    setUserChoice(choice);
    const randomChoice = choices[_.random(0, choices.length - 1)];
    setCompChoice(randomChoice);
    calcResult(choice, randomChoice);
  };
  const showButton = (choice) => (
    <button key={choice} onClick={() => game(choice)}>
      {choice}
    </button>
  );
  return (
    <article className={styles.game}>
      <h2>Гра “Камінь, Ножиці, Папір”</h2>
      <div>{choices.map(showButton)}</div>
      {userChoice && (
        <div>
          <p>Твій вибір: {userChoice}</p>
          <p>Вибір комп’ютера: {compChoice}</p>
          <p>{result}</p>
        </div>
      )}
    </article>
  );
};

export default RockPaperScissors;
