import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const splitUrl = book.url.split("/");
  const bookId = splitUrl[splitUrl.length - 1];

  return (
    <Link
      className="border-2 border-slate-200 p-2 rounded-md h-56 flex flex-col gap-2 justify-center items-center"
      to={`/books/${bookId}`}
    >
      <h2 className="text-4xl">{book?.name}</h2>
      <span>Authors:{book.authors}</span>
    </Link>
  );
};

export { BookCard };
