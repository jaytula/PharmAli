const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    db.query(
      `
      SELECT * FROM saved_medications
    `
    ).then(({ rows: saved_medications }) => {
      response.json(saved_medications);
    });
  });

  return router;
};