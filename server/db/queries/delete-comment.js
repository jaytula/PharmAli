const deleteComment = function(db, comment_id) {
  const queryParams = [comment_id];
  const queryString = `
  DELETE FROM comments WHERE
  id =$1`

  return db.query(queryString, queryParams);
};

module.exports = { deleteComment };