const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
    db.query(
      `
      SELECT blogs.id, blogs.title, blogs.image_url, blogs.content, categories.name as name, blogs.created_at 
      FROM blogs
      JOIN categories ON category_id = categories.id;
    `
    ).then(({ rows: blogs }) => {
      response.json(blogs);
    });
  });

  return router;
};