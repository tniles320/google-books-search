import React from "react";
import SearchResults from "../SearchResults";
import SavedResults from "../SavedResults";
import "./style.css";

function DisplayContainer(props) {
  const { books } = props;

  return (
    <div id="display-container">
      <label>
        Results
        <div id="results-container">
          {books.map((book, index) => {
            return window.location.pathname === "/search-books" ? (
              <SearchResults key={index} book={book} />
            ) : (
              <SavedResults key={index} book={book} />
            );
          })}
        </div>
      </label>
    </div>
  );
}

export default DisplayContainer;
