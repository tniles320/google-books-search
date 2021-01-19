const { Book } = require("../models");

// methods for the booksController
module.exports = {
  findAll: function (req, res) {
    Book.find(req.query)
      .sort({ date: -1 })
      .then((dbBook) => res.json(dbBook))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    Book.findById(req.params.id)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  create: function (req, res) {
    Book.create(req.body)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  update: function (req, res) {
    Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
  remove: function (req, res) {
    Book.deleteOne({ _id: req.params.id })
      .then((dbBook) => res.json(dbBook))
      .catch((err) => {
        console.error(err);
        res.status(422).json(err);
      });
  },
};
