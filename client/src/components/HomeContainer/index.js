import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HomeContainer() {
  return (
    <div id="link-buttons">
      <Link to="/search-books" className="link-btn">
        Search for Books
      </Link>
      <Link to="/saved-books" className="link-btn">
        View saved Books
      </Link>
    </div>
  );
}

export default HomeContainer;
