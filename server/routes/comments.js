const router = require("express").Router();
const { getComments, addComment, deleteComment } = require('../db/queries/comments');

module.exports = db => {
  // Get comments for a blog
  router.get("/:id", (request, response) => {
    getComments(db, request.url.split("/")[1])
      .then(({rows: comments}) => {
        response.send(comments);
      })
  });

  // Add a comment to the blog
  router.post("/add", (req, res) => {
    addComment(db, req.body.user_id, req.body.comment, req.body.blog_id)
      .then(() => {
        res.send('Comment added successfully');
      })
  });

  // Remove a comment from th blog
  router.post("/delete", (req, res) => {
    const comment_id = Object.keys(req.body)[0];
    deleteComment(db, comment_id)
    .then(() => {
      res.send('Comment deleted successfully');
    })
  });

  return router;
};