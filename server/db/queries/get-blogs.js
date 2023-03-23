const getBlogs = function(db) {
  const queryString = `SELECT blogs.user_id, blogs.id, blogs.title, blogs.image_url, blogs.content, categories.name as category, blogs.created_at 
  FROM blogs JOIN categories ON category_id = categories.id;`
  return db.query(queryString);
};

module.exports = { getBlogs };