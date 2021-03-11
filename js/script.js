/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// All quotes provided by https://www.pastemagazine.com/tv/doctor-who/20-great-doctor-who-quotes/
const quotes = [
  {
    quote: `I am and always will be the optimist. 
    The hoper of far-flung hopes and the dreamer of improbable dreams.`,
    source: `The Doctor, played by Matt Smith`,
    citation: `Doctor Who - Season 6, Episode 6`,
    year: 2011,
    tags: `Optimistic`
  },
  {
    quote: `The universe is big. It’s vast and complicated and ridiculous. 
    And sometimes, very rarely, impossible things just happen and we call them miracles.`,
    source: `The Doctor, played by Matt Smith`,
    citation: `Doctor Who - Season 5, Episode 12`,
    year: 2010,
    tags: `Beautiful`
  },
  {
    quote: `You want weapons? We’re in a library! Books! The best weapons in the world!`,
    source: `The Doctor, played by David Tennant`,
    citation: `Doctor Who - Season 2, Epidode 2`,
    year: 2006,
    tags: `Motivational`
  },
  {
    quote: `When you’re a kid, they tell you it’s all… 
    Grow up, get a job, get married, get a house, have a kid, and that’s it. 
    But the truth is, the world is so much stranger than that. 
    It’s so much darker. And so much madder. And so much better.`,
    source: `Elton Pope, played by Marc Warren`,
    citation: `Doctor Who - Season 2, Epidode 10`,
    year: 2006,
    tags: `` // Left blank intentionally
  },
  {
    quote: `The way I see it, every life is a pile of good things and bad things. 
    The good things don’t always soften the bad things, 
    but vice versa, the bad things don’t always spoil the good things and make them unimportant.`,
    source: `The Doctor, played by Matt Smith`,
    citation: `Doctor Who - Season 5, Epidode 10`,
    year: 2010,
    tags: `Truth`
  },
  {
    quote: `Some people live more in 20 years than others do in 80. 
    It’s not the time that matters, it’s the person.`,
    source: `The Doctor, played by David Tennant`,
    citation: `Doctor Who - Season 3, Epidode 6`,
    year: 2007,
    tags: `Motivational`
  },
  {
    quote: `In 900 years of time and space, I’ve never met anyone who wasn’t important.`,
    source: `The Doctor, played by Matt Smith`,
    citation: `Doctor Who - Season 6, Christmas Special`,
    year: 2010,
    tags: `` // Left blank intentionally
  },
  {
    quote: `We’re all stories, in the end. Just make it a good one, eh?`,
    source: `The Doctor, played by Matt Smith`,
    citation: `Doctor Who - Season 5, Epidode 13`,
    year: 2010,
    tags: `` // Left blank intentionally
  },
  {
    quote: `You don’t just give up. You don’t just let things happen. You make a stand! You say no! 
    You have the guts to do what’s right, even when everyone else just runs away.`,
    source: `Rose Tyler, played by Billie Piper`,
    citation: `Doctor Who - Season 1, Epidode 13`,
    year: 2005,
    tags: `Motivational`
  },
  {
    quote: `This is one corner… of one country, in one continent, on one planet that’s a corner of 
    a galaxy that’s a corner of a universe that is forever growing and shrinking and creating and 
    destroying and never remaining the same for a single millisecond. And there is so much, so much to see.`,
    source: `The Doctor, played by Matt Smith`,
    citation: `Doctor Who - Season 7, Epidode 4`,
    year: 2012,
    tags: `Beautiful`
  }
];

/***
 * `getRandomQuote` function
***/

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);