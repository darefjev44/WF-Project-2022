const mongoose = require('mongoose');
const dbURI = 
"mongodb+srv://bankDBUser:bankDBPassword@cluster0.x5v4coo.mongodb.net/bankAppDB?retryWrites=true&w=majority";

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