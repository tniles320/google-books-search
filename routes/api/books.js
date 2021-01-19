const router = require("express").Router();
const booksController = require("../../controllers/booksControllers");

// finds all books with url /api/books
router.route("/").get(booksController.findAll).post(booksController.create);

// routes for /api/books/:id
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
