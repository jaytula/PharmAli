const router = require("express").Router();
const { getBlogs, getBlogById, addBlog, editBlog, deleteBlog } = require('../db/queries/blogs');

module.exports = db => {
  // Get all blogs
  router.get("/", (request, response) => {
    getBlogs(db)
      .then(({ rows: blogs }) => {
        response.json(blogs);
      });
  });

  // Get blog by user id (and blog_id)
  router.get("/:id", (request, response) => {
    if (request.url !== '/undefined') {
      const params = request.url.substring(1);
      getBlogById(db, params)
        .then(({ rows: blogs }) => {
          response.json(blogs);
        });
    } else {
      response.send(200);
    }
  });

  // Delete a blog
  router.post("/delete", (req, res) => {
    const blogId = Object.keys(req.body)[0]
    deleteBlog(db, blogId)
      .then(() => {
        res.send(200)
      })
  });

  // Add/Edit a blog
  router.post("/edit", (req, res) => {
    const blog = req.body
    const actionType = (blog.id) ? editBlog : addBlog;
    actionType(db, blog)
      .then(() => {
        res.json({ success: true })
      })
  });

  return router;
};