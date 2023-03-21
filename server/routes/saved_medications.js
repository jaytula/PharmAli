const router = require("express").Router();

module.exports = db => {
  router.get("/:id", (request, response) => {
    const queryParams = request.url.substring(1).split("&");
    const queryString = `SELECT * FROM saved_medications WHERE user_id = $1 AND drug_id = $2;`
    
    db.query(queryString, queryParams)
    .then(({ rows: saved_medications }) => {
      console.log(saved_medications)
      response.json(saved_medications);
    })
  });

  router.post("/add", (request, response) => {
    const queryParams = [request.body.user_id, request.body.drug_id]
    const queryString = `INSERT INTO saved_medications (user_id, drug_id)
    VALUES ($1, $2) RETURNING id`
    db.query(queryString, queryParams)
      .then((data) => {
        response.json(data.rows[0]);
      });
  });

  router.post("/remove", (request, response) => {
    const queryParams = [request.body.favourite]
    const queryString = `DELETE FROM saved_medications WHERE id = $1`
    db.query(queryString, queryParams)
      .then(() => {
        response.sendStatus(200);
      });
  });

  return router;
};