const router = require("express").Router();
const addComment = require("../db/queries/add-comment");
const deleteComment = require("../db/queries/delete-comment")

module.exports = db => {
  router.get("/", (request, response) => {
    let blog_id = request.url.split('=')[1]
    const queryParams = [blog_id];
    const queryString = `
    SELECT * FROM comments
    WHERE blog_id = $1
    `;
    console.log(request.url.split('=')[1]);
    db.query(queryString, queryParams)
      .then((data) => {
        response.json({ rows: data.rows });
        console.log(data.rows);
      }).catch((e) => {
        console.log(e);
      })
  });

  router.post("/add", (req, res) => {
    addComment.addComment(db, req.body.user_id, req.body.comment, req.body.blog_id)
      .then((data) => {
        return res.json({ comment_id:data.rows[0].id });
      })
  });

  router.post("/delete", (req, res) => {
    const comment_id = Object.keys(req.body)[0];
    deleteComment.deleteComment(db, comment_id)
    .then(() => {
      res.send(200);
    })
  });

  return router;
};