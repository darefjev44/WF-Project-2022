const mongoose = require('mongoose');

require('dotenv').config();
const dbURI = process.env.DBConnect;

try { 
  mongoose.connect(
      dbURI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
//mongoose.connect(dbURI);

require('./accounts');