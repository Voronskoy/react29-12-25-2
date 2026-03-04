import PropTypes from "prop-types";
import "./playList.css";
const Song = (props) => {
  const { song } = props;
  const { title, artist, genre, image } = song;
  return (
    <article className="song">
      <img src={image} alt={artist} />
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{genre}</p>
    </article>
  );
};

Song.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default Song;
