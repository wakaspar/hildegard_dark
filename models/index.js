var mongoose = require("mongoose");


// mongoose.connect( );

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/api", 
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
// Database sanity check
connection.once('open', function() {
    console.log('<<== MongoDB database connection established successfully ==>>');
})

module.exports.Project = require("./project");


