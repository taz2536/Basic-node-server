const express = require("express");
const dotenv = require("dotenv");

//  Loading Router to resource Endpoint
const resource = require("./routes/API/V1/resource");

//  Loading ENV VARS
dotenv.config({path: "./config/config.env"});

const app = express();

app.use("/api/v1/resource", resource);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );