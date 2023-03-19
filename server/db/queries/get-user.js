const getUser = function(db, userInfo) {
  let queryString = '';
  const queryParams = [userInfo.email];

  if (userInfo.name) {
    queryString += 'INSERT INTO users (name, email, password, postal_code) VALUES ($1, $2, $3, $4)'
    queryParams.unshift(userInfo.name);
    queryParams.push(userInfo.password, userInfo.postal_code);
  } else {
    queryString += `SELECT * FROM users WHERE email = $1`
  }

  console.log(queryString, queryParams, userInfo);

  return db.query(queryString, queryParams);
};

module.exports = { getUser };
