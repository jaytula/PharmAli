// Database connection when server is started
require('dotenv').config()
const { Client } = require('pg');

const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
const connObj = {
	user: PGUSER,
	host: PGHOST,
	password: PGPASSWORD,
	port: PGPORT,
	database: PGDATABASE,
}

const db = new Client(connObj);

db.connect();

module.exports = db;