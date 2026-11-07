require("dotenv").config();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME || "portfolio";

const client = new MongoClient(uri);

let database;

async function connectDB() {

    if (database) {
        return database;
    }

    await client.connect();

    database = client.db(dbName);

    await database.command({ ping: 1 });

    console.log(`Connected to MongoDB database: ${dbName}`);

    return database;
}

function getDB() {

    if (!database) {
        throw new Error("Database is not connected.");
    }

    return database;
}

module.exports = {
    connectDB,
    getDB
};