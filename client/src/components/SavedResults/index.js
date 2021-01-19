import React from "react";
import API from "../../utils/API";
import "./style.css";

function SavedResults(props) {
  const { book, handleBookLink } = props;

  const handleBookDelete = async (data) => {
    await API.deleteBook(data).then(() => {});
  };
  return (
    <div className="saved-results">
      <div className="results-headline">
        <h3>{book.title}</h3>
        <div className="saved-results-buttons">
          <button onClick={() => handleBookLink(book.link)}>Book Info</button>
          <button onClick={() => handleBookDelete(book._id)}>
            Delete Book
          </button>
        </div>
      </div>
      <div className="results-authors">
        Authors: <br></br>
        {book.authors.map((author, index) => {
          return <h4 key={index}>{author}</h4>;
        })}
      </div>
      <div className="results-main">
        <img className="results-image" src={book.image} alt={book.title} />
        <div className="results-description">{book.description}</div>
      </div>
    </div>
  );
}

export default SavedResults;
