/*
Title: Sample Handler
Description: Sample Handler
Author: Sabirul Islam
Date: 19/01/2020
*/

// module scafolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(200, {
    message: 'This is a sample url.',
  });
};

module.exports = handler;
