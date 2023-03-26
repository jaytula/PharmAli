const router = require("express").Router();
const { getJournal, addJournal, removeJournal } = require('../db/queries/journal');

module.exports = (db) => {
  // To get all journal entries of a user
  router.get("/:id", (req, res) => {
    const id = req.url.substring(1);
    getJournal(db, id)
      .then((journal) => {
        res.send(journal.rows);
      })
  });

  // To remove a journal entry of a user
  router.post("/delete", (req, res) => {
    const journalId = Object.keys(req.body)[0]
    removeJournal(db, journalId)
    .then(() => {
        res.status(200).send("Journal Removed")
      })
  });

  // To add a journal entry of a user
  router.post("/add", (req, res) => {
    addJournal(db, req.body.user_id, req.body.text)
      .then((journal) => {
        res.send(journal.rows[0]);
      })
  });

  return router;
};