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
    // Validate comment
    const { user_id, comment, blog_id } = req.body;
    const commentInfo = { user_id, comment, blog_id };
    let status = 400
    if (!comment) {
      return res.status(status).send("Please include some text in the comment.")
    }
    if (!user_id) {
      return res.status(status).send("It seems you're trying to add a comment withtout logging in")
    }
    
    // If comment is valid add it to the comment table
    addComment(db, commentInfo)
      .then(() => {
        res.status(200).send('Comment added successfully');
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