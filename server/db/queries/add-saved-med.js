const addSavedMed = function(db, user_id, drug_id) {
  const queryParams = [user_id, drug_id]
  const queryString = `INSERT INTO saved_medications (user_id, drug_id)
  VALUES ($1, $2) RETURNING id`
  return db.query(queryString, queryParams);
};

module.exports = { addSavedMed };