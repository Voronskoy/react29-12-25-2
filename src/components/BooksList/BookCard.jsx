import React from "react";
import styles from "./Books.module.scss";
const BookCard = (props) => {
  const { book } = props;
  const getAuthor = (book) =>
    book.authors.map((author) => author.name).join("- ");
  const getGenre = (book) => book.subjects[0];
  return (
    <article className={styles.bookCard}>
      <p>{getGenre(book)}</p>
      <h3>{book.title}</h3>

      <p>Автор:{getAuthor(book)}</p>
    </article>
  );
};

export default BookCard;
