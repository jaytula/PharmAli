const addUser = function(db, userInfo) {
  const queryParams = [userInfo.name, userInfo.email, userInfo.password, userInfo.postal_code];
  const queryString = 'INSERT INTO users (name, email, password, postal_code) VALUES ($1, $2, $3, $4) RETURNING id'

  return db.query(queryString, queryParams);
};

module.exports = { addUser };
