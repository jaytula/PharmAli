const router = require("express").Router();
const deleteBlog = require("../db/queries/delete-blog");
const editBlog = require("../db/queries/edit-blog");

module.exports = db => {
  router.get("/", (request, response) => {
    db.query(
      `
      SELECT blogs.user_id, blogs.id, blogs.title, blogs.image_url, blogs.content, categories.name as name, blogs.created_at 
      FROM blogs
      JOIN categories ON category_id = categories.id;
    `
    ).then(({ rows: blogs }) => {
      response.json(blogs);
    });
  });

  router.get("/:id", (request, response) => {
    const queryParams = request.url.replace('/', '').split('&')
    console.log(queryParams);
    let queryString = `
    SELECT blogs.id, blogs.title, blogs.image_url, blogs.content, categories.name as category, blogs.created_at 
    FROM blogs
    JOIN categories ON category_id = categories.id
    WHERE blogs.user_id = $1
  `
    queryString += (queryParams.length > 1) ? ' AND blogs.id = $2;' : ';';
    db.query(queryString, queryParams)
      .then(({ rows: blogs }) => {
        response.json(blogs);
      });
  });

  router.post("/delete", (req, res) => {
    const blogId = Object.keys(req.body)[0]
    deleteBlog.deleteBlog(db, blogId)
      .then(() => {
        res.send(200)
      })
  });

  router.post("/edit", (req, res) => {
    const blog = req.body
    editBlog.editBlog(db, blog)
      .then(() => {
        res.json({ success: true })
      })
  });
  return router;
};