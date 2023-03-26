const router = require("express").Router();
const { getCategories } = require("../db/queries/categories");

module.exports = db => {
  // Get all categories
  router.get("/", (request, response) => {
    getCategories(db)
      .then(({ rows: categories }) => {
        response.json(categories);
      });
  });

  return router;
};