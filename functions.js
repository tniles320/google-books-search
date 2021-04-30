const axios = require("axios");

const functions = {
  getBook: (query) =>
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.data)
      .catch((err) => "error"),

  saveBook: function (data) {
    return axios.post("/api/books", data);
  },
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },
};

module.exports = functions;
