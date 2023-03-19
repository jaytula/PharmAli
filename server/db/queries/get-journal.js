
const getJournal = function(db, email) {
  const queryParams = [email];
  const queryString = `
  SELECT * FROM journals WHERE
  user_id = (SELECT id FROM users WHERE email = $1)`

  return db.query(queryString, queryParams);
};

module.exports = { getJournal };
