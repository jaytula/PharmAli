const getArticles = function(db) {
  const queryString = `SELECT * FROM articles`
  return db.query(queryString);
};

module.exports = { getArticles };