import React from "react";
import quotes from "./quotes";
import Quote from "../Quote/Quote";
import styles from './QuotesList.module.scss'

const QuotesList = () => {
  const showQuote = (quote) => (
    <Quote key={quote.text} text={quote.text} author={quote.author} />
  );
  return <div className={styles.quotes}>{quotes.map(showQuote)}</div>;
};

export default QuotesList;
