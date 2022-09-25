import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { findBook } from "../features/books/booksSlice";
import { getBook } from "../features/books/helpers/getBook";

const BookDetail = () => {
  const { bookDetail, bookIds } = useSelector(state => state.booksData);
  const dispatch = useDispatch();
  const { bookId } = useParams();

  const bookDetailUrl = `https://www.anapioficeandfire.com/api/books/${bookId}`;

  const tableData = [
    // { tableHeading: "Authors", property: "authors" },
    { tableHeading: "Number of pages", property: "numberOfPages" },
    { tableHeading: "Publisher", property: "publisher" },
    { tableHeading: "Country", property: "country" },
    { tableHeading: "MediaType", property: "mediaType" },
    { tableHeading: "Released", property: "released" },
  ];

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

      <table className="w-4/5 m-auto mt-32 text-center border-2">
        <tbody>
          {tableData.map(({ tableHeading, property }) => (
            <tr className="border-2" key={tableHeading}>
              <th className="border-2 w-1/2 p-2">{tableHeading}</th>
              <td className="border-2">{bookDetail[property] ? bookDetail[property] : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link className="block underline underline-offset-4 w-12 m-auto mt-20 text-center" to="/">
        Back
      </Link>
    </div>
  );
};

export { BookDetail };
