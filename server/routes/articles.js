const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    db.query(
      `
      SELECT * FROM articles
    `
    ).then(({ rows: articles }) => {
      response.json(articles);
    });
  });

  return router;
};