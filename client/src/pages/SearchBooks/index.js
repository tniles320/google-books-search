import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleContainer from "../../components/TitleContainer";
import SearchContainer from "../../components/SearchContainer";
import DisplayContainer from "../../components/DisplayContainer";
import API from "../../utils/API";
import "./style.css";

function SearchBooks() {
  const [searchBooks, setSearchBooks] = useState([]);

  // searches for book from user input
  const handleBookSearch = (event) => {
    event.preventDefault();
    const book = document.getElementById("search-input").value;
    API.getBook(book).then((res) => {
      res.data.items.map((book) => {
        return setSearchBooks((searchBooks) => [
          ...searchBooks,
          book.volumeInfo,
        ]);
      });
    });
  };

  return (
    <div>
      <TitleContainer />
      <div className="search-save-btn-container">
        <Link to="/saved-books" id="saved-link">
          Saved Books
        </Link>
      </div>
      <SearchContainer handleBookSearch={handleBookSearch} />
      <DisplayContainer books={searchBooks} />
    </div>
  );
}

export default SearchBooks;
