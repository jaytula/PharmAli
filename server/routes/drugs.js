const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    db.query(
      `
      SELECT * FROM drugs
    `
    ).then(({ rows: blogs }) => {
      response.json(blogs);
    });
  });

  return router;
};