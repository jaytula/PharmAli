const { getArticles } = require("../db/queries/articles");
const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    getArticles(db)
      .then(({ rows: articles }) => {
        response.json(articles);
      });
  });

  return router;
};