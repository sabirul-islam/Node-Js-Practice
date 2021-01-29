/*
Title: Uptime Monitoring Application
Description: A Restful API to monitor up or down time of user defined links
Author: Sabirul Islam
Date: 19/01/2020
*/

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// app object - module scafolding
const app = {};

// configuration
app.config = {
  port: 8080,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// start the server
app.createServer();

// handle request response
app.handleReqRes = handleReqRes;
