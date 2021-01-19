import React from "react";
import API from "../../utils/API";
import "./style.css";

function SearchResults(props) {
  const { book } = props;
  const bookObj = {
    title: book.title,
    authors: book.authors,
    description: book.description,
    image: book.imageLinks.thumbnail,
    link: book.infoLink,
  };
  const handleBookSave = async (data) => {
    await API.saveBook(data).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="search-results">
      <div className="results-headline">
        <h3>{bookObj.title}</h3>
        <div className="results-buttons">
          <button href={bookObj.link}>Book Info</button>
          <button onClick={() => handleBookSave(bookObj)}>Save Book</button>
        </div>
      </div>
      <div className="results-authors">
        {bookObj.authors.map((author) => {
          return <p>{author}</p>;
        })}
      </div>
      <div className="results-main">
        <img
          className="results-image"
          src={bookObj.image}
          alt={bookObj.title}
        />
        <div className="results-description">{bookObj.description}</div>
      </div>
    </div>
  );
}

export default SearchResults;
