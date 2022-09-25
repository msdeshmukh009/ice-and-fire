import { Route, Routes } from "react-router-dom";
import { BookDetail, BooksListing } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BooksListing />} />
      <Route path="/books/:bookId" element={<BookDetail />} />
    </Routes>
  );
};

export { AllRoutes };
