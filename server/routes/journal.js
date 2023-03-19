const router = require("express").Router();
const getJournal = require('../db/queries/get-journal');
const editJournal = require('../db/queries/edit-journal');
const removeJournal = require('../db/queries/remove-journal');

module.exports = (db) => {
  // To get all journals of a user
  router.get("/:email", (req, res) => {
    const email = request.url.replace('/', '')
    getJournal.getJournal(db, email)
      .then((journal) => {
        res.send({ journal });
      })
  });
  
  // To edit or remove a journal of a user
  router.post("/", (req, res) => {
    const { email, journal, edit_journal } = req.body;
    (edit_journal) ? editJournal.editJournal(db, journal, email) : removeJournal.removeJournal(db, email)
  });

  return router;
};