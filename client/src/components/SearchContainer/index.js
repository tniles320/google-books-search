import React from "react";
import "./style.css";

function SearchContainer(props) {
  const { handleBookSearch } = props;
  return (
    <div id="search-container">
      <form>
        <label htmlFor="search-input">Search Books</label>
        <input id="search-input" placeholder="Search terms..."></input>
        <button id="search-btn" onClick={handleBookSearch}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchContainer;
