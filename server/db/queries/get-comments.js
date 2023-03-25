const getComments = function(db, blog_id) {
  const queryParams = [blog_id];
  const queryString = `SELECT comments.*, users.name FROM comments
  JOIN users ON comments.user_id = users.id
  WHERE comments.blog_id = $1`;
  return db.query(queryString, queryParams);
};

module.exports = { getComments };