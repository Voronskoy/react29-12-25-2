import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooksThunk } from "../../store/booksSlice";
import BooksList from "../BooksList/BooksList";

const BooksCatalog = () => {
  const dispatch = useDispatch();
  const { items, isPending, error } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getAllBooksThunk());
  }, [dispatch]);
  return (
    <section>
      <h1>Books</h1>
      <div>
        {isPending && <p>Loading...</p>}
        {error && <p>error!</p>}
        {!isPending &&
          !error &&
          (items.length > 0 ? <BooksList books={items}/> : <p>empty list</p>)}
      </div>
    </section>
  );
};

export default BooksCatalog;
