import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { findBook } from "../features/books/booksSlice";
import { InfoTable } from "../features/books/components/InfoTable";
import { getBook } from "../features/books/helpers/getBook";

const BookDetail = () => {
  const { bookDetail, bookIds, isLoading, error } = useSelector(state => state.booksData);
  const dispatch = useDispatch();
  const { bookId } = useParams();

  const bookDetailUrl = `https://www.anapioficeandfire.com/api/books/${bookId}`;

  useEffect(() => {
    if (!bookIds.includes(bookId)) {
      dispatch(getBook({ url: bookDetailUrl }));
    } else {
      dispatch(findBook({ bookDetailUrl }));
    }
  }, [bookDetailUrl, bookId, bookIds, dispatch]);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 p-4">
      <h1 className="text-4xl text-center">{bookDetail?.name}</h1>

      {isLoading && <h2 className="text-center text-lg">Loading...</h2>}
      {error && <h2 className="text-center text-lg text-red-500">{error}</h2>}

      <InfoTable bookDetail={bookDetail} />

      <Link className="block underline underline-offset-4 w-12 m-auto mt-20 text-center" to="/">
        Back
      </Link>
    </div>
  );
};

export { BookDetail };
