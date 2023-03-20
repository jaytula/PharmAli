const router = require("express").Router();

module.exports = db => {
  router.get("/", (request, response) => {
   let blog_id = request.url.split('=')[1]
   console.log('---------------------')
   const queryParams = [blog_id];
   const queryString = `
    SELECT * FROM comments
    WHERE blog_id = $1
    `;
    console.log(request.url.split('=')[1]);
    db.query(queryString, queryParams)
    // db.query(`
    // SELECT * FROM comments
    // WHERE blog_id = ?`,blog_id
    // )
    .then((data) => {
      response.json({rows : data.rows});
      console.log(data.rows);
    }).catch((e)=>{
      console.log(e);
    })
  });

  return router;
};