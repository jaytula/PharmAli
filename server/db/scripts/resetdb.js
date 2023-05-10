// Create a connection to the db
require("dotenv").config();
const { Client } = require('pg');
const SCHEMA_PATH = './db/schema';
const SEEDS_PATH = './db/seeds';
const drugs = require('./drug-names');

const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
const fs = require("fs").promises;

const connObj = {
	user: PGUSER,
	host: PGHOST,
	password: PGPASSWORD,
	port: PGPORT,
	database: PGDATABASE,
}

// To add drug names seeds
const addDrugNames = function(db) {
	// Initialize the the query string and params
	let queryString = `INSERT INTO drugs (name)
	VALUES `
	const unduplicateDrugs = []

	// Array of drugs starting with a specific letter
	Object.values(drugs.drugs).forEach((letterDrugs) => {
		// Each drug in the array of drugs
		letterDrugs.forEach((drug) => {
			const filteredDrug = drug.split(" ")[0].replace(/'|;/g, "");
			// Verify not duplicate
			if (!unduplicateDrugs.includes(filteredDrug)) {
				queryString += `('${filteredDrug}'),`
				unduplicateDrugs.push(filteredDrug);
			}
		})
	});

	// Chance the last , with a semicolon
	queryString = `${queryString.slice(0, -1)};`

	return db.query(queryString);
};

// To add the tables
const runMigrations = async db => {
	const migrations = await fs.readdir(SCHEMA_PATH);
	for (const migration of migrations) {
		const sql = await fs.readFile(`${SCHEMA_PATH}/${migration}`, 'utf8');
		console.log(`\t Running ${migration}`);
		await db.query(sql);
	}
}

// To add the seeds
const runSeeds = async db => {
	// Add drug names to drug
	addDrugNames(db)
	// Add rest of the seeds
	const seeds = await fs.readdir(SEEDS_PATH);
	for (const seed of seeds) {
		const sql = await fs.readFile(`${SEEDS_PATH}/${seed}`, 'utf8');
		console.log(`\t Running ${seed}`);
		await db.query(sql);
	}
}

// To create connection, add tables and seeds
const resetDB = async () => {
	try {
		console.log("Running DB Reset...");
		console.log("Establishing DB connection: ");
		const client = new Client(connObj);
		await client.connect();
		console.log("connection established!\n");

		console.log("-- Running Migrations --\n");
		await runMigrations(client);
		console.log('\n');
		console.log("-- Running Seeds --\n");
		await runSeeds(client);
		console.log('\n');
		console.log("-- COMPLETED --");
		client.end();
	} catch (e) {
		console.log("ERROR OCCURED:\n", e);
		client.end();
	}
}

// Reset the db
resetDB();