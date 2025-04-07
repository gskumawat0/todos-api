const mongoose = require("mongoose");

const connections = {};

const connectDB = (db) => {
  try {
    const url = process.env[`MONGO_URI_${db.toUpperCase()}`];

    if (!url) {
      throw new Error(`DB connectionection url not found for db: ${db}`);
    }

    const connection = mongoose.createConnection(url, {});
    console.log("connected to db : ", db);
    connection.set("debug", true);
    connections[db] = connection;
    connection.on("error", (err) => {
      console.error("MongoDB connection error: ", err.message);
      connections[db] = null;
    });

    connection.on("disconnected", () => {
      console.log(`MongoDB connection to ${db} has been disconnected`);
      connections[db] = null;
    });
    connection.on("connected", (connection) => {
      console.log(`MongoDB connection to ${db} has been established`);
      connections[db] = connection;
    });
    connection.on("reconnected", (connection) => {
      console.log(`MongoDB connection to ${db} has been reconnected`);
      connections[db] = connection;
    });

    connection.on("close", () => {
      console.log(`MongoDB connection to ${db} has been closed`);
      connections[db] = null;
    });

    // setup models for the connection
    return connection;
  } catch (error) {
    console.log(error);
  }
};

const getConnection = (dbName) => {
  if (!connections[dbName]) {
    connections[dbName] = connectDB(dbName);
  }
  return connections[dbName];
};

module.exports = { getConnection };
