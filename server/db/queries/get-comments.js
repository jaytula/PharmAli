const getComments = function(db, blog_id) {
  const queryParams = [blog_id];
  const queryString = `SELECT * FROM comments WHERE blog_id = $1`;
  return db.query(queryString, queryParams);
};

module.exports = { getComments };