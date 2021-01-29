/*
Title: Not Found Handler
Description: 404 Not Found Handler
Author: Sabirul Islam
Date: 19/01/2020
*/

// module scafolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: 'Requested url not Found.',
  });
};

module.exports = handler;
