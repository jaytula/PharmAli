const router = require("express").Router();
const getJournal = require('../db/queries/get-journal');

module.exports = (db) => {
  router.get("/:email", (req, res) => {
    const email = request.url.replace('/', '')
    getJournal.getJournal(db, email)
      .then((journal) => {
        res.send({ journal });
      })
  });

  return router;
};