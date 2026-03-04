import PropTypes from "prop-types";
import "./Quote.css";

const Quote = (props) => {
  return (
    <div className="quote">
      <blockquote>{props.text}</blockquote>
      <p>{props.author}</p>
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
