
const getSavedMed = function(db, queryParams) {
  console.log(queryParams);
  const queryString = (queryParams.length === 2) ? `SELECT * FROM saved_medications WHERE user_id = $1 AND drug_id = $2;` : 
  `SELECT * FROM saved_medications WHERE user_id = $1;`
  db.query(queryString, queryParams)
  return db.query(queryString, queryParams);
};

module.exports = { getSavedMed };
