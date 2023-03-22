const router = require("express").Router();

module.exports = db => {
  router.get("/:name", (req, res) => {
    const queryParam = (isNaN(req.url)) ? [`${req.url.replace('/', '').toUpperCase()}%`] : [`${req.url.replace('/', '')}`];
    const queryString = (isNaN(req.url)) ? `SELECT * FROM drugs WHERE name LIKE $1` : `SELECT * FROM drugs WHERE id = $1`

    db.query(queryString, queryParam)
      .then(({ rows: drugs }) => {
        res.json(drugs);
      });
  });

  return router;
};