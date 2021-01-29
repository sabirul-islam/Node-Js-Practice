/*
Title: Routes
Description: Application Routes
Author: Sabirul Islam
Date: 19/01/2020
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
