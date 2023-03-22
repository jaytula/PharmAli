const removeSavedMed = function(db, savedMedId) {
  const queryParams = [savedMedId]
  const queryString = `DELETE FROM saved_medications WHERE id = $1`
  return db.query(queryString, queryParams);
};

module.exports = { removeSavedMed };
