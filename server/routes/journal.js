const router = require("express").Router();
const getJournal = require('../db/queries/get-journal');
const addJournal = require('../db/queries/add-journal');
const removeJournal = require('../db/queries/remove-journal');
// const { default: Journal } = require("../../client/src/components/MyJournal/Journal");

module.exports = (db) => {
  // To get all journals of a user
  router.get("/:id", (req, res) => {
    const id = req.url.replace('/', '')
    console.log("id",id)
    console.log("--------------")
    getJournal.getJournal(db, id)
      .then((journal) => {
        res.send({ journal: journal.rows });
      })
  });
  
  // To edit or remove a journal of a user
  router.post("/delete", (req, res) => {

    // const { email, journal, edit_journal } = req.body;
    const journalId = Object.keys(req.body)[0]
    // (edit_journal) ? editJournal.editJournal(db, journal, journalId) : removeJournal.removeJournal(db, journalId)
    removeJournal.removeJournal(db, journalId)
    .then(()=>{
      res.status(200).send("db update")
    })
    // console.log(Object.keys(req.body)[0])
  });
  router.post("/add", (req, res) => {
    // const { email, journal, edit_journal } = req.body;
    // const journalId = Object.keys(req.body)[0]
    // (edit_journal) ? editJournal.editJournal(db, journal, journalId) : removeJournal.removeJournal(db, journalId)
   
    addJournal.addJournal(db, req.body.user_id, req.body.text)
    .then((data)=>{
      console.log("helloooo",data)
      res.status(200).json(data.rows[0])
    })
   
    // console.log(Object.keys(req.body)[0])
  });
  return router;
};