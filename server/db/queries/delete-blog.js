const deleteBlog = function(db, blog_id) {
  const queryParams = [blog_id];
  const queryString = `
  DELETE FROM blogs WHERE
  id =$1`

  return db.query(queryString, queryParams);
};

module.exports = { deleteBlog };