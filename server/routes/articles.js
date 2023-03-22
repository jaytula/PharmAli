const getArticles = require("../db/queries/get-articles");
const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    getArticles.getArticles(db)
      .then(({ rows: articles }) => {
        response.json(articles);
      });
  });

  return router;
};