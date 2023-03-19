
const getJournal = function(db, journal, email) {
  const queryParams = [journal, email];
  const queryString = `
  UPDATE journal
  SET
  text = $1,
  WHERE user_id = (SELECT id FROM users WHERE email = $2)`;

  return db.query(queryString, queryParams);
};

module.exports = { getJournal };
