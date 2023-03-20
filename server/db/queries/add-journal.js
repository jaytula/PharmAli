const addJournal = function(db, user_id, text) {
  console.log(user_id)
  const queryParams = [user_id, text];
  const queryString = `
  INSERT INTO journals (user_id, text) 
  VALUES 
  ($1, $2)
  RETURNING *
  `

  console.log("add Journal")
  return db.query(queryString, queryParams)
  .then((data)=>{
console.log(data.rows[0].id)
    const queryString2 =`
    SELECT journals.*, users.name FROM journals JOIN users ON users.id = user_id  WHERE
    user_id = $1 AND journals.id = $2
    `
    const queryParams2 = [user_id, data.rows[0].id]
    return db.query(queryString2, queryParams2)
  })
};

module.exports = { addJournal };