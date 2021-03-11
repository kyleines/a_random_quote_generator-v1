/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * Dear Reviewer,
 * 
 * Thank you for your time! 
 * Your feedback is important to me and crucial to my growth as a developer.
 * With the following code I hope to earn the "Exceeds Expectations" grade, and 
 * I humbly request that you reject my submission if I don't meet those requirements.
 * 
 * Thank you again!
***/

/*** 
 * @constant {array} quotes
 * 
 * Contains 10 object literals.
 * 
 * All quotes provided by https://www.pastemagazine.com/tv/doctor-who/20-great-doctor-who-quotes/
***/

const quotes = [
  {
    quote: `I am and always will be the optimist. 
    The hoper of far-flung hopes and the dreamer of improbable dreams.`,
    source: `The Doctor (Matt Smith)`,
    citation: `Doctor Who - Season 6 Episode 6`,
    year: 2011,
    tags: `Optimistic` // Added tags property to meet "Exceeds Expectations" requirements
  },
  {
    quote: `The universe is big. It’s vast and complicated and ridiculous. 
    And sometimes, very rarely, impossible things just happen and we call them miracles.`,
    source: `The Doctor (Matt Smith)`,
    citation: `Doctor Who - Season 5 Episode 12`,
    year: 2010,
    tags: `Beautiful`
  },
  {
    quote: `You want weapons? We’re in a library! Books! The best weapons in the world!`,
    source: `The Doctor (David Tennant)`,
    citation: `Doctor Who - Season 2 Epidode 2`,
    year: 2006,
    tags: `Motivational`
  },
  {
    quote: `When you’re a kid, they tell you it’s all… 
    Grow up, get a job, get married, get a house, have a kid, and that’s it. 
    But the truth is, the world is so much stranger than that. 
    It’s so much darker. And so much madder. And so much better.`,
    source: `Elton Pope (Marc Warren)`,
    citation: `Doctor Who - Season 2 Epidode 10`,
    year: 2006,
    tags: `` // Left blank intentionally
  },
  {
    quote: `The way I see it, every life is a pile of good things and bad things. 
    The good things don’t always soften the bad things, 
    but vice versa, the bad things don’t always spoil the good things and make them unimportant.`,
    source: `The Doctor (Matt Smith)`,
    citation: `Doctor Who - Season 5 Epidode 10`,
    year: 2010,
    tags: `Truth`
  },
  {
    quote: `Some people live more in 20 years than others do in 80. 
    It’s not the time that matters, it’s the person.`,
    source: `The Doctor (David Tennant)`,
    citation: `Doctor Who - Season 3 Epidode 6`,
    year: 2007,
    tags: `Motivational`
  },
  {
    quote: `In 900 years of time and space, I’ve never met anyone who wasn’t important.`,
    source: `The Doctor (Matt Smith)`,
    citation: `Doctor Who - Season 6 Christmas Special`,
    year: 2010,
    tags: `` // Left blank intentionally
  },
  {
    quote: `We’re all stories, in the end. Just make it a good one, eh?`,
    source: `The Doctor (Matt Smith)`,
    citation: `Doctor Who - Season 5 Epidode 13`,
    year: 2010,
    tags: `` // Left blank intentionally
  },
  {
    quote: `You don’t just give up. You don’t just let things happen. You make a stand! You say no! 
    You have the guts to do what’s right, even when everyone else just runs away.`,
    source: `Rose Tyler (Billie Piper)`,
    citation: `Doctor Who - Season 1 Epidode 13`,
    year: 2005,
    tags: `Motivational`
  },
  {
    quote: `This is one corner… of one country, in one continent, on one planet that’s a corner of 
    a galaxy that’s a corner of a universe that is forever growing and shrinking and creating and 
    destroying and never remaining the same for a single millisecond. And there is so much, so much to see.`,
    source: `The Doctor (Matt Smith)`,
    citation: `Doctor Who - Season 7 Epidode 4`,
    year: 2012,
    tags: `Beautiful`
  }
];


/***
 * @function `getRandomQuote` function
 * 
 * Calculates a random number based on the length of the quotes array.
 * Passes that number as the array index.
 * 
 * @return {object} Random object in quotes array
***/

function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
 * @function `printQuote` function
 * 
 * Calls getRandomQuote() function to get a random quote object.
 * Checks quote object properties.
 * Concatenates and interpolates html elements and object values.
 * Changes <body> background to a random color by calling getRandomColor() function.
 * * Referenced the following website for help changing the background color:
 * * https://www.tutorialrepublic.com/faq/how-to-change-the-background-color-of-a-web-page-using-javascript.php
 * 
 * @return {string} String comprised of html elements and interpolated object values.
***/

function printQuote () {
  let quoteObject = getRandomQuote();
  let html = `
    <p class="quote">${quoteObject.quote}</p>
    <p class="source">${quoteObject.source}`;
  if (quoteObject.citation) {
    html += `<span class="citation">${quoteObject.citation}</span>`;
  }
  if (quoteObject.year) {
    html += `<span class="year">${quoteObject.year}</span>`;
  }
  if (quoteObject.tags) { // Added to meet "Exceeds Expectations" requirements
    html += `<span class="tags">${quoteObject.tags}</span>`;
  }
  html += `</p>`;
  document.body.style.background = getRandomColor();
  // 
  // 
  return document.getElementById("quote-box").innerHTML = html;
}


/***
 * @function `getRandomColor` function
 * Added to meet "Exceeds Expectations" requirements
 * 
 * Randomly generates values between 0 - 255 and interpolates them into return string as RGB color notation.
 * 
 * @return {string} RGB color notation.
***/

function getRandomColor () {
  let value = () => Math.floor(Math.random() * 255);
  return `rgb(${value()}, ${value()}, ${value()})`;
}


/***
 * @function `autoRefresh` function
 * Added to meet "Exceeds Expectations" requirements
 * 
 * Upon page load, calls the printQuote() function every 15 seconds (15000 milliseconds).
 * 
 * @return {number} Represents the ID value of the timer that is set.
 * 
 * Referenced the following website for setInterval() help:
 * https://www.w3schools.com/jsref/met_win_setinterval.asp
***/

function autoQuote () {
  setInterval(printQuote, 15000);
}
autoQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);