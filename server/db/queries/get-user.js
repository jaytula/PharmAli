const getUser = function(db, userInfo) {
  let queryString = '';
  const queryParams = [userInfo.email];

  // Create a query string based  on register/login
  if (userInfo.name) {
    queryString += 'INSERT INTO users (name, email, password, postal_code) VALUES ($1, $2, $3, $4) RETURNING id'
    queryParams.unshift(userInfo.name);
    queryParams.push(userInfo.password, userInfo.postal_code);
  } else {
    queryString += `SELECT * FROM users WHERE email = $1`
  }

  return db.query(queryString, queryParams);
};

module.exports = { getUser };
