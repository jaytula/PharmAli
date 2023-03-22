const router = require("express").Router();
const removeSavedMed = require("../db/queries/remove-saved-med");
const addSavedMed = require("../db/queries/add-saved-med");
const getSavedMed = require("../db/queries/get-saved-med");

module.exports = db => {
  // Get all or specific saved medication
  router.get("/:id", (request, response) => {
    getSavedMed.getSavedMed(db, request.url.substring(1).split("&"))
      .then(({ rows: saved_medications }) => {
        response.json(saved_medications);
      })
  });

  // Save a medication for a user
  router.post("/add", (request, response) => {
   addSavedMed.addSavedMed(db, request.body.user_id, request.body.drug_id)
      .then((data) => {
        response.json(data.rows[0]);
      });
  });

  // Remove a saved medication for a user
  router.post("/remove", (request, response) => {
    removeSavedMed.removeSavedMed(db, request.body.favourite)
      .then(() => {
        response.sendStatus(200);
      });
  });

  return router;
};