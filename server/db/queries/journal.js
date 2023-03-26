
const getJournal = function(db, user_id) {
  const queryParams = [user_id];
  const queryString = `SELECT journals.*, users.name FROM journals JOIN users ON users.id = user_id
  WHERE user_id = $1 ORDER BY created_at DESC;`
  return db.query(queryString, queryParams);
};

const addJournal = function(db, user_id, text) {
  const queryParams = [user_id, text];
  const queryString = `
  INSERT INTO journals (user_id, text) 
  VALUES ($1, $2) RETURNING *`
  return db.query(queryString, queryParams);
};

const removeJournal = function(db, journalId) {
  const queryParams = [journalId];
  const queryString = `DELETE FROM journals WHERE id = $1`
  return db.query(queryString, queryParams);
};

module.exports = { getJournal, addJournal, removeJournal };
