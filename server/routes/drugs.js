const router = require("express").Router();
const getDrug = require("../db/queries/get-drug");

module.exports = db => {
  // Get drug by name or id
  router.get("/:name", (req, res) => {
    getDrug.getDrug(db, req.url)
      .then(({ rows: drugs }) => {
        res.json(drugs);
      });
  });

  return router;
};