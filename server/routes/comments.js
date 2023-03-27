const router = require("express").Router();
const { getComments, addComment, deleteComment } = require('../db/queries/comments');

module.exports = (db, updateComment) => {
  // Get comments for a blog
  router.get("/:id", (request, response) => {
    getComments(db, request.url.split("/")[1])
      .then(({ rows: comments }) => {
        response.send(comments);
      })
  });

  // Add a comment to the blog
  router.post("/add", (req, res) => {
    // Validate comment
    const { user_id, comment, blog_id, name } = req.body;
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
      .then(({ rows: comment }) => {
        const add = true;
        res.status(200).send('Comment added successfully');
        updateComment(add, { ...comment[0], name });
      })
      .catch(error => console.log(error));
  });

  // Remove a comment from th blog
  router.post("/delete", (req, res) => {
    const comment_id = Object.keys(req.body)[0];
    deleteComment(db, comment_id)
      .then(() => {
        const add = false;
        res.send('Comment deleted successfully');
        updateComment(add, comment_id);
      })
  });

  return router;
};