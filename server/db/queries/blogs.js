const getBlogs = function(db) {
  const queryString = `SELECT blogs.user_id, blogs.id, blogs.title, blogs.image_url, blogs.content, categories.name as category, blogs.created_at 
  FROM blogs JOIN categories ON category_id = categories.id;`
  return db.query(queryString);
};

const getBlogById = function(db, blog_id) {
  const queryParams = [blog_id]
  queryString = `SELECT users.name, blogs.user_id, blogs.id, blogs.title, blogs.image_url, blogs.content, categories.name as category, blogs.created_at 
    FROM blogs
    JOIN categories ON category_id = categories.id
    JOIN users ON user_id = users.id
    WHERE blogs.id = $1`
  return db.query(queryString, queryParams);
};

const addBlog = function(db, blog) {
  const queryParams = [blog.user_id, blog.title, blog.image_url, blog.content, blog.category];
  const queryString = `INSERT INTO blogs (user_id, title, image_url, content, category_id)
  VALUES ($1, $2, $3, $4, $5) RETURNING id`
  return db.query(queryString, queryParams);
};

const editBlog = function(db, blog) {
  const queryParams = [blog.title, blog.image_url, blog.content, blog.category, blog.id];
  const queryString = `UPDATE blogs SET
    title = $1,
    image_url = $2,
    content = $3,
    category_id = $4
    WHERE id = $5`;
  return db.query(queryString, queryParams);
};

const deleteBlog = function(db, blog_id) {
  const queryParams = [blog_id];
  const queryString = `
  DELETE FROM blogs WHERE id =$1`
  return db.query(queryString, queryParams);
};

module.exports = { getBlogs, getBlogById, addBlog, editBlog, deleteBlog };