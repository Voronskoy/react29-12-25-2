import games from "./games";
import Game from "./Game";
import styles from "./gamesList.module.css";
import { withClickContext } from "../HOCs";
const GamesList = (props) => {
  const { countClick } = props;
  const showGame = (game) => <Game key={game.id} game={game} />;
  return (
    <div className={styles.games} onClick={countClick}>
      {games.map(showGame)}
    </div>
  );
};
const GameListWith = withClickContext(GamesList);
export default GameListWith;
