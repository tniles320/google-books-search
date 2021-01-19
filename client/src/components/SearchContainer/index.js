import React from "react";

function SearchContainer(props) {
  const { handleBookSearch } = props;
  return (
    <div id="search-container">
      <form>
        <label>
          Search Books
          <input id="search-input" placeholder="Search terms..."></input>
        </label>
        <button id="search-btn" onClick={handleBookSearch}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchContainer;
