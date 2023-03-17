const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    db.query(
      `
      SELECT * FROM comments
    `
    ).then(({ rows: comments }) => {
      response.json(comments);
    });
  });

  return router;
};