const getSavedMed = function(db, queryParams) {
  const queryString = (queryParams.length === 2) ? 
  `SELECT drugs.*, drug_id
  FROM saved_medications
  JOIN drugs ON
  drugs.id = drug_id 
  WHERE user_id = $1 AND drug_id = $2;` : 
  `SELECT drugs.*, drug_id 
  FROM saved_medications 
  JOIN drugs ON
  drugs.id = drug_id 
  WHERE user_id = $1;`
  db.query(queryString, queryParams)
  return db.query(queryString, queryParams);
};

module.exports = { getSavedMed };