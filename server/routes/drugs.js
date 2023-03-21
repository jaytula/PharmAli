const router = require("express").Router();

module.exports = db => {
  router.get("/:name", (req, res) => {
    const queryParam = [`${req.url.replace('/', '').toUpperCase()}%`];
    const queryString = `SELECT * FROM drugs WHERE name LIKE $1`
    
    db.query(queryString, queryParam)
      .then(({ rows: drugs }) => {
        res.json(drugs);
      });
  });

  return router;
};