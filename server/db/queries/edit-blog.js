const editBlog = function(db, blog) {
  let queryString = '';
  const queryParams = [blog.title, blog.image_url, blog.content, blog.name];
  if (blog.id) {
    queryParams.push(blog.id);
    queryString = `UPDATE blogs SET
    title = $1,
    image_url = $2,
    content = $3,
    category_id = $4
    WHERE id = $5`;
  } else {
    queryParams.unshift(blog.user_id);
    queryString += `INSERT INTO blogs (user_id, title, image_url, content, category_id)
    VALUES ($1, $2, $3, $4, $5)`
  }

  console.log(queryString)
  console.log(queryParams)
  return db.query(queryString, queryParams);
};

module.exports = { editBlog };
