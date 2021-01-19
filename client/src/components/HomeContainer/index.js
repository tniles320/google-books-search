import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HomeContainer(props) {
  const { handleSearchBooks, handleSavedBooks } = props;
  return (
    <div id="link-buttons">
      <Link to="/search-books" className="link-btn" onClick={handleSearchBooks}>
        Search for Books
      </Link>
      <Link to="/saved-books" className="link-btn" onClick={handleSavedBooks}>
        View saved Books
      </Link>
    </div>
  );
}

export default HomeContainer;
