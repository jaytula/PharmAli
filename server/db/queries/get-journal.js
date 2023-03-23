
const getJournal = function(db, user_id) {
  const queryParams = [user_id];
  const queryString = `
  SELECT journals.*, users.name FROM journals JOIN users ON users.id = user_id  WHERE
  user_id = $1;`

  return db.query(queryString, queryParams);
};

module.exports = { getJournal };
