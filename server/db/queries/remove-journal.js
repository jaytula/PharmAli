const removeJournal = function(db, journalId) {
  const queryParams = [journalId];
  const queryString = `
  DELETE FROM journals WHERE
  id =$1`
  console.log("remove Journal")
  return db.query(queryString, queryParams);
};

module.exports = { removeJournal };
