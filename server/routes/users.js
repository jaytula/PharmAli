const router = require("express").Router();


module.exports = db => {
  router.get("/:email", (request, response) => {
    const email = request.url.replace('/', '')
    const queryString = `SELECT * FROM users WHERE email = $1`
    const queryParams = [email]

    db.query(queryString, queryParams)
    .then(({ rows: users }) => {
      response.json(users);
    });
  });

  return router;
};