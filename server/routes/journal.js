const router = require("express").Router();
const getJournal = require('../db/queries/get-journal');
const addJournal = require('../db/queries/add-journal');
const removeJournal = require('../db/queries/remove-journal');

module.exports = (db) => {
  // To get all journal entries of a user
  router.get("/:id", (req, res) => {
    const id = req.url.replace('/', '')
    getJournal.getJournal(db, id)
      .then((journal) => {
        res.send({ journal: journal.rows });
      })
  });
  
  // To remove a journal entry of a user
  router.post("/delete", (req, res) => {
    const journalId = Object.keys(req.body)[0]
    removeJournal.removeJournal(db, journalId)
    .then(() => {
      res.send(200);
    })
  });

  // To add a journal entry of a user
  router.post("/add", (req, res) => {
    addJournal.addJournal(db, req.body.user_id, req.body.text)
    .then((journal) => {
      res.send(journal.rows[0]);
    })
  });
  
  return router;
};