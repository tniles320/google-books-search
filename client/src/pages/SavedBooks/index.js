import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TitleContainer from "../../components/TitleContainer";
import DisplayContainer from "../../components/DisplayContainer";
import API from "../../utils/API";
import "./style.css";

function SavedBooks() {
  const [savedBooks, setSavedBooks] = useState([]);
  const handleSavedBooks = () => {
    API.getSavedBooks().then((res) => {
      res.data.map((book) => {
        return setSavedBooks((savedBooks) => [...savedBooks, book]);
      });
    });
  };

  useEffect(() => {
    handleSavedBooks();
  }, []);

  return (
    <div>
      <TitleContainer />
      <div className="search-save-btn-container">
        <Link to="/search-books" id="search-link">
          Search Books
        </Link>
      </div>
      <DisplayContainer books={savedBooks} />
    </div>
  );
}

export default SavedBooks;
