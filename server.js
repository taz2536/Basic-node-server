const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const morgan = require("morgan");

//  Loading Router to resource Endpoint
const resource = require("./routes/API/V1/resource");

//  Loading ENV VARS
dotenv.config({path: "./config/config.env"});

//  Initiates an express server
const app = express();

//  Attaches logger middleware to the server
if (process.env.NODE_ENV === 'development') {

    //  If in development mode we use this logger that provides detailed description
    app.use(morgan('dev'));
}

else {
    //  Else use a simple logger
    app.use(logger);
}


//  Adding routes to app server
app.use("/api/v1/resource", resource);

//  PORT defined to 5000
const PORT = process.env.PORT || 5000;

//  Set server to listen to PORT
app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );