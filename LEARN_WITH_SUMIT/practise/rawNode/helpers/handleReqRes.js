/*
Title: Handle Request Response
Description: Handle Request And Response
Author: Sabirul Islam
Date: 19/01/2020
*/

// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

// module scafolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handle
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const decoder = new StringDecoder('utf-8');
  let realData = '';

  const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payLoad) => {
    statusCode = typeof statusCode === 'number' ? statusCode : 500;
    payLoad = typeof payLoad === 'object' ? payLoad : {};

    const payLoadString = JSON.stringify(payLoad);

    // return the final response
    res.writeHead(statusCode);
    res.end(payLoadString);
  });

  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end', () => {
    realData += decoder.end();

    console.log(realData);

    // response handle
    res.end('Hello World');
  });
};
module.exports = handler;
