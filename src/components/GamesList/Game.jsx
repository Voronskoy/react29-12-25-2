import PropTypes from "prop-types";
import styles from "./gamesList.module.css";

const Game = (props) => {
  const { game } = props;
  const { title, genre, isOnline, platforms, rating } = game;
  const showPlatform = (platform) => <li key={platform}>{platform}</li>;
  return (
    <article className={styles.game}>
      {isOnline && <span>Online</span>}
      <h2>{title}</h2>
      <p>genre:{genre}</p>
      <p>rating:{rating}</p>
      <ul>{platforms?.map(showPlatform)}</ul>
    </article>
  );
};


Game.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    platforms: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
}

export default Game;
