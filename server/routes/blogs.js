const router = require("express").Router();
const validator = require('validator');
const { getBlogs, getBlogById, addBlog, editBlog, deleteBlog } = require('../db/queries/blogs');

module.exports = db => {
  // Get all blogs
  router.get("/", (request, response) => {
    getBlogs(db)
      .then(({ rows: blogs }) => {
        response.json(blogs);
      });
  });

  // Get blog by blog_id
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
    // Validate the blog info
    const { id, title, image_url, content, user_id, category } = req.body;
    const blogInfo = { id, title, image_url, content, user_id, category };
    let status = 400
    if (!title) {
      return res.status(status).send("Please include a title")
    }
    if (!image_url || !validator.isURL(image_url)) {
      return res.status(status).send("Please include a valid image url")
    }
    if (!content) {
      return res.status(status).send("Please add some content to the blog")
    }
    if (!user_id) {
      return res.status(status).send("It seems you're trying to add a blog withtout logging in")
    }
    if (!category) {
      return res.status(status).send("Please choose one of the categories")
    }

    // If blog info is valid, add it to blog table
    const actionType = (id) ? editBlog : addBlog;
    actionType(db, blogInfo)
      .then(() => {
        return res.status(200).send(`Blog ${(id) ? 'Edited' : 'Added'}`)
      })
  });

  return router;
};