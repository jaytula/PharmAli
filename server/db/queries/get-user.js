const getUser = function(db, email) {
  const queryString = `SELECT * FROM users WHERE email = $1`;
  const queryParams = [email];
  return db.query(queryString, queryParams);
};

const addUser = function(db, userInfo) {
  const { name, email, password, postal_code } = userInfo;
  const queryParams = [name, email, password, postal_code];
  const queryString = 'INSERT INTO users (name, email, password, postal_code) VALUES ($1, $2, $3, $4) RETURNING id'
  return db.query(queryString, queryParams);
};

const getUserById = function(db, user_id) {
  const queryString = `SELECT * FROM users WHERE id = $1`;
  const queryParams = [user_id];
  return db.query(queryString, queryParams);
};


module.exports = { getUser, addUser, getUserById };
