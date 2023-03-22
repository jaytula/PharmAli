const editBlog = function(db, blog) {
  const queryParams = [blog.title, blog.image_url, blog.content, blog.name, blog.id];
  const queryString = `
  UPDATE blogs
  SET
  title = $1,
  image_url = $2,
  content = $3,
  category_id = $4
  WHERE id = $5`;

  return db.query(queryString, queryParams);
};

module.exports = { editBlog };
