import React from "react";
import SearchResults from "../SearchResults";
import SavedResults from "../SavedResults";
import "./style.css";

function DisplayContainer(props) {
  const { books } = props;

  const handleBookLink = (data) => {
    window.open(data, "_blank");
  };

  return (
    <div id="display-container">
      <label htmlFor="results-container">Results:</label>
      <div id="results-container">
        {books.map((book, index) => {
          return window.location.pathname === "/search-books" ? (
            <SearchResults
              key={index}
              book={book}
              handleBookLink={handleBookLink}
            />
          ) : (
            <SavedResults
              key={index}
              book={book}
              handleBookLink={handleBookLink}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DisplayContainer;
