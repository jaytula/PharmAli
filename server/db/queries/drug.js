
const getDrug = function(db, params) {
  let queryParams;
  let queryString;
  
  // If searching by name
  if (isNaN(params)) {
    queryParams = [`${params.toUpperCase()}%`];
    queryString = `SELECT * FROM drugs WHERE name LIKE $1`
  }

  // If searching by id
  if (!isNaN(params)) {
    queryParams = [`${params}`];
    queryString = `SELECT * FROM drugs WHERE id = $1`
  }

  return db.query(queryString, queryParams);
};

module.exports = { getDrug };
