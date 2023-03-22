
const getDrug = function(db, params) {
  const queryParams = (isNaN(params)) ? [`${params.replace('/', '').toUpperCase()}%`] : [`${params.replace('/', '')}`];
  const queryString = (isNaN(params)) ? `SELECT * FROM drugs WHERE name LIKE $1` : `SELECT * FROM drugs WHERE id = $1`

  return db.query(queryString, queryParams);
};

module.exports = { getDrug };
