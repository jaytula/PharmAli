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
    // Validate comment
    const { user_id, text } = req.body;
    const journalInfo = { user_id, text };
    console.log(journalInfo);
    let status = 400
    if (!text) {
      return res.status(status).send("Please include some text in this journal entry.")
    }
    if (!user_id) {
      return res.status(status).send("It seems you're trying to add a journal withtout logging in")
    }

    // If journal entry is valid add it to the journal table
    addJournal(db, journalInfo)
      .then((journal) => {
        res.status(200).send(journal.rows[0]);
      })
  });

  return router;
};