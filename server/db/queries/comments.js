const getComments = function(db, blog_id) {
  const queryParams = [blog_id];
  const queryString = `SELECT comments.*, users.name FROM comments
  JOIN users ON comments.user_id = users.id
  WHERE comments.blog_id = $1`;
  return db.query(queryString, queryParams);
};

const addComment = function(db, comment) {
  const queryParams = [comment.user_id, comment.comment, comment.blog_id];
  const queryString = `
  INSERT INTO comments (user_id, comment, blog_id)
  VALUES  ($1, $2, $3)`
  return db.query(queryString, queryParams);

};

const deleteComment = function(db, comment_id) {
  const queryParams = [comment_id];
  const queryString = `
  DELETE FROM comments WHERE
  id =$1`

  return db.query(queryString, queryParams);
};

module.exports = { getComments, addComment, deleteComment };