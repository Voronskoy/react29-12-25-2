import { useContext } from "react";
import games from "./games";
import Game from "./Game";
import styles from "./gamesList.module.css";
import { ClickContext } from "./../../context/index";
const GamesList = () => {
  const { setCliclCount } = useContext(ClickContext);
  const showGame = (game) => <Game key={game.id} game={game} />;
  const countClick = () => setCliclCount((prev) => prev + 1);
  return (
    <div className={styles.games} onClick={countClick}>
      {games.map(showGame)}
    </div>
  );
};

export default GamesList;
