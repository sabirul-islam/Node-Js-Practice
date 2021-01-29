/*
Title: Basic Node app example
Description: Simple node application that print random quotes per second interval.
Author: Sabirul Islam
Date: 19/01/2020
*/

// Dependencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes');

// App object - Module scafolding
const app = {};

// Configuration
app.config = {
  timeBetweenQuotes: 1000,
};

// Function that prints a random quote
app.printQuote = function printAQuote() {
  // Get all the quotes
  const allQuotes = quotesLibrary.allQuotes();

  // Get the length of the quotes
  const numberOfQuotes = allQuotes.length;

  // Pick a random number betweeen 1 and the number of quotes
  const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

  // Get the quote at the position in the array (minus one)
  const selectedQuote = allQuotes[randomNumber - 1];

  // print the quote at the console
  console.log(selectedQuote);
};

// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
  // Create the interval, using the config variable defined above
  setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

// Invoke the loop
app.indefiniteLoop();
