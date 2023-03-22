const getCategories = function(db) {
  const queryString = `SELECT * FROM categories`
  return db.query(queryString);
};

module.exports = { getCategories };
