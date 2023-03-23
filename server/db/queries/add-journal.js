const addJournal = function(db, user_id, text) {
  const queryParams = [user_id, text];
  const queryString = `
  INSERT INTO journals (user_id, text) 
  VALUES 
  ($1, $2) RETURNING *`
  return db.query(queryString, queryParams);
};

module.exports = { addJournal };