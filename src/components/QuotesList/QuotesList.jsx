import React from "react";
import quotes from "./quotes";
import Quote from "../Quote/Quote";

const QuotesList = () => {
  const showQuote = (quote) => (
    <Quote key={quote.text} text={quote.text} author={quote.author} />
  );
  return <div>{quotes.map(showQuote)}</div>;
};

export default QuotesList;
