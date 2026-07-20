import React from "react";
import BookCard from "./BookCard";
import styles from "./Books.module.scss";
const BooksList = (props) => {
  const { books } = props;
  const showBook = (book) => <BookCard book={book} key={book.id} />;
  return <section className={styles.booksList}>{books.map(showBook)}</section>;
};

export default BooksList;
