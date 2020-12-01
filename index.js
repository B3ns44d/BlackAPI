// ! Import express
let express = require('express');
// ? import db token info
let dbinfo = require('./dbtoken');
let apiDB = dbinfo; // ? <== db info
// ! Import Body parser
let bodyParser = require('body-parser');
// ! Import Mongoose
let mongoose = require('mongoose');
// ! Initialize the app
let app = express();

// ! Import routes
let apiRoutes = require("./api-routes");
// ! Configure bodyboarder to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// ! Connect to Mongoose and set connection variable
// ! Mongoose connection
mongoose.connect(`mongodb://${apiDB.dbtoken.dbusername}:${apiDB.dbtoken.dbpassword}@cluster0-shard-00-00.dvwwd.mongodb.net:27017,cluster0-shard-00-01.dvwwd.mongodb.net:27017,cluster0-shard-00-02.dvwwd.mongodb.net:27017/${apiDB.dbtoken.dbname}?ssl=true&replicaSet=atlas-3qd9xr-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true})


var db = mongoose.connection;

// ! Added check for DB connection

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// ! Setup server port
var port = process.env.PORT || 3448;

// ! Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// ! Use Api routes in the App
app.use('/api', apiRoutes); // ? <== here wer all the magic happened
// ! Launch app to listen to specified port
app.listen(port, function () {
    console.log("App Running on port " + port);
    console.log("Yeaaah no errors or bugs dude keep going");
});
