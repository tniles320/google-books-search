import React, { useState } from "react";
import TitleContainer from "../../components/TitleContainer";
import SearchContainer from "../../components/SearchContainer";
import DisplayContainer from "../../components/DisplayContainer";
import API from "../../utils/API";

function SearchBooks() {
  const [searchBooks, setSearchBooks] = useState([]);
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
      <SearchContainer handleBookSearch={handleBookSearch} />
      <DisplayContainer books={searchBooks} />
    </div>
  );
}

export default SearchBooks;
