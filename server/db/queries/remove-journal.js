const removeJournal = function(db, journalId) {
  const queryParams = [journalId];
  const queryString = `
  DELETE FROM journals WHERE
  id =$1`
  return db.query(queryString, queryParams);
};

module.exports = { removeJournal };
