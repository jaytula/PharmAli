const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    db.query(
      `
      SELECT * FROM categories
    `
    ).then(({ rows: categories }) => {
      response.json(categories);
    });
  });

  return router;
};