const mongoose = require('mongoose');
const dbURI = 
"mongodb+srv://bankDBUser:bankDBPassword@cluster0.x5v4coo.mongodb.net/bankAppDB?retryWrites=true&w=majority";
try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
);
}
 catch (e) {
  console.log("could not connect");
}
require('./accounts');