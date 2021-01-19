import axios from "axios";

export default {
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  saveBook: function (data) {
    return axios.post("/api/books", data).then((res) => res.data);
  },
  getSavedBooks: function () {
    return axios.get("/api/books").then((res) => res.data);
  },
  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`).then((res) => res.data);
  },
};
