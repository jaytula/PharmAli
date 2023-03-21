const getUserById = function(db, user_id) {
  let queryString = '';
  const queryParams = [user_id];
  queryString += `SELECT * FROM users WHERE id = $1`

  return db.query(queryString, queryParams);
};

module.exports = { getUserById };
