import React from "react";
import games from "./games";
import Game from "./Game";
import styles from "./gamesList.module.css";
const GamesList = () => {
  const showGame = (game) => <Game key={game.id} game={game} />;
  return <div className={styles.games}>{games.map(showGame)}</div>;
};

export default GamesList;
