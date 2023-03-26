const getSavedMed = function(db, user_id) {
  const queryParams = [user_id];
  const queryString = `SELECT drugs.name, saved_medications.* 
  FROM saved_medications 
  JOIN drugs ON
  drugs.id = drug_id 
  WHERE user_id = $1;`
  db.query(queryString, queryParams)
  return db.query(queryString, queryParams);
};

const addSavedMed = function(db, user_id, drug_id) {
  const queryParams = [user_id, drug_id]
  const queryString = `INSERT INTO saved_medications (user_id, drug_id)
  VALUES ($1, $2) RETURNING id`
  return db.query(queryString, queryParams);
};

const removeSavedMed = function(db, savedMedId) {
  const queryParams = [savedMedId]
  const queryString = `DELETE FROM saved_medications WHERE id = $1`
  return db.query(queryString, queryParams);
};

const addDrugNotes = function(db, id, notes) {
  const queryParams = [notes, id]
  const queryString = `UPDATE saved_medications SET notes = $1
  WHERE id = $2`
  return db.query(queryString, queryParams)
};

module.exports = { getSavedMed, addSavedMed, removeSavedMed, addDrugNotes };