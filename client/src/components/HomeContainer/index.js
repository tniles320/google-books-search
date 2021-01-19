import React from "react";
import { Link } from "react-router-dom";

function HomeContainer(props) {
  const { handleSearchBooks, handleSavedBooks } = props;
  return (
    <div>
      <Link to="/search-books" onClick={handleSearchBooks}>
        Search for Books
      </Link>
      <Link to="/saved-books" onClick={handleSavedBooks}>
        View saved Books
      </Link>
    </div>
  );
}

export default HomeContainer;
