const getSavedMed = function(db, queryParams) {
  const queryString = (queryParams.length === 2) ? 
  `SELECT drugs.*, drug_id
  FROM saved_medications
  JOIN drugs ON
  drugs.id = drug_id 
  WHERE user_id = $1 AND drugs.name = $2;` : 
  `SELECT drugs.*, drug_id 
  FROM saved_medications 
  JOIN drugs ON
  drugs.id = drug_id 
  WHERE user_id = $1;`

  console.log(queryString, queryParams);
  db.query(queryString, queryParams)
  return db.query(queryString, queryParams);
};

module.exports = { getSavedMed };