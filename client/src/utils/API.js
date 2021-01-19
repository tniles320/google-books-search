/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
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
