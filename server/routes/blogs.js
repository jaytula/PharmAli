const router = require("express").Router();
const deleteBlog = require("../db/queries/delete-blog");
const editBlog = require("../db/queries/edit-blog");
const getBlogs = require("../db/queries/get-blogs");
const getBlogById = require("../db/queries/get-blog-by-id");

module.exports = db => {
  // Get all blogs
  router.get("/", (request, response) => {
   getBlogs.getBlogs(db)
   .then(({ rows: blogs }) => {
      response.json(blogs);
    });
  });

  // Get blog by user id (and blog_id)
  router.get("/:id", (request, response) => {
    getBlogById.getBlogById(db, request.url.replace('/', '').split('&'))
      .then(({ rows: blogs }) => {
        response.json(blogs);
      });
  });

  // Delete a blog
  router.post("/delete", (req, res) => {
    const blogId = Object.keys(req.body)[0]
    deleteBlog.deleteBlog(db, blogId)
      .then(() => {
        res.send(200)
      })
  });
  
  // Edit a blog
  router.post("/edit", (req, res) => {
    const blog = req.body
    editBlog.editBlog(db, blog)
      .then(() => {
        res.json({ success: true })
      })
  });
  return router;
};