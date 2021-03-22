//https://stackoverflow.com/questions/10703513/node-js-client-for-a-socket-io-server
"use strict";
const port = process.env.PORT || 3000;
const server = require("http").createServer();
const express = require("express");
const fs = require('fs');
const url = require('url');
const bodyParser = require("body-parser");
var app = express();

app.use("/", express.static(__dirname + '/GaugeCustomWidget'));
app.get("/", function(req, res){
    res.send('This is the test environnement of the custom widget');
});

//Start the Server 
//server.on("request", app);
server.listen(port, function () {
    console.info(`Bot Server: ${server.address().port}`);
});
