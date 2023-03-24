const getBlogById = function(db, params) {
  const queryParams = params
  let queryString = `SELECT users.name, blogs.user_id, blogs.id, blogs.title, blogs.image_url, blogs.content, categories.name as category, blogs.created_at 
    FROM blogs
    JOIN categories ON category_id = categories.id
    JOIN users ON user_id = users.id
    WHERE blogs.id = $1
  `
  queryString += (queryParams.length > 1) ? ' AND blogs.user_id = $2;' : ';';
  db.query(queryString, queryParams)

  return db.query(queryString, queryParams);
};

module.exports = { getBlogById };
