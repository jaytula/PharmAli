const addDrugNotes = function(db, id, notes) {
  const queryParams = [notes, id]
  const queryString = `UPDATE saved_medications SET notes = $1
  WHERE id = $2`

  console.log(queryString, queryParams);
  return db.query(queryString, queryParams)
};

module.exports = { addDrugNotes };