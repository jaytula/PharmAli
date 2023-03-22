const router = require("express").Router();
const getCategories = require("../db/queries/get-categories");

module.exports = db => {
  // Get all categories
  router.get("/", (request, response) => {
    getCategories.getCategories(db)
    .then(({ rows: categories }) => {
      response.json(categories);
    });
  });

  return router;
};