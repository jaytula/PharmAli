
const getJournal = function(db, user_id) {
  const queryParams = [user_id];
  const queryString = `
  SELECT * FROM journals WHERE
  user_id = $1`

  return db.query(queryString, queryParams);
};

module.exports = { getJournal };
