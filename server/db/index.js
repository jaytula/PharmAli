// external imports
const mongoose = require("mongoose");
require('dotenv').config()

async function db() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        process.env.DB_URL,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = db;



// Database connection when server is started
// const { Client } = require('pg');

// const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;
// const connObj = {
// 	user: DB_USER,
// 	host: DB_HOST,
// 	password: DB_PASS,
// 	port: DB_PORT,
// 	database: DB_NAME,
// }

// const db = new Client(connObj);

// db.connect();

// module.exports = db;

