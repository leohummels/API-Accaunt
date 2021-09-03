const mongoose = require('mongoose');

let uri = 'mongodb://localhost/apinode';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => { 
    console.log("MongoDB database connection established successfully")
});

module.exports = mongoose;
