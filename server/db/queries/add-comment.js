const addComment = function(db, user_id, comment, blog_id) {
  const queryParams = [user_id, comment, blog_id,];
  const queryString = `
  INSERT INTO comments (user_id, comment, blog_id)
  VALUES  ($1, $2, $3) RETURNING id`
  return db.query(queryString, queryParams);
};

module.exports = { addComment }