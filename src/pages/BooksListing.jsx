import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BookCard } from "../features/books/components/BookCard";
import { PageButtons } from "../features/books/components/PageButtons";
import { getBooks } from "../features/books/helpers";

const BooksListing = () => {
  const { books } = useSelector(state => state.booksData);
  const dispatch = useDispatch();
  const [url, setUrl] = useState("https://www.anapioficeandfire.com/api/books?page=1&pageSize=5");

  useEffect(() => {
    dispatch(getBooks({ url }));
  }, [dispatch, url]);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 p-4 flex flex-col justify-between">
      <h1 className="text-3xl text-center">Ice & Fire</h1>

      <main className="flex flex-wrap justify-center items-center gap-4">
        {books.map(book => (
          <BookCard book={book} key={book.url} />
        ))}
      </main>

      <PageButtons setUrl={setUrl} />
    </div>
  );
};

export { BooksListing };
