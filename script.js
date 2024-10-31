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


/* Below is my array with its respective objects. 
I added the citation and year for the ones I was able to find the information for. */

let quotes = [
  {
    quote:'It does not matter how slowly you go as long as you do not stop.',
    source:'Confucius',
    category:'Inspirational'
  },
  {
    quote:'The heaviest penalty for declining to rule is to be ruled by someone inferior to yourself.',
    source:'Plato',
    citation:'The Republic',
    year:375
  },
  {
    quote:'You could not step twice into the same river.',
    source:'Heraclitus',
    citation:'Siddhartha',
    year:1922
  },
  {
    quote:'The most difficult thing in life is to know yourself.',
    source:'Thales of Miletus',
    category: 'Philosophy'
  },
  {
    quote:'The journey of a thousand miles begins with a single step.',
    source:'Lao Tzu',
    citation:'Chapter 64, Tao Te Ching',
    year: 400
  },
  {
    quote:'One ought to be both feared and loved, but as it is difficult for the two to go together, it is much safer to be feared than loved, if one of the two has to be wanting.',
    source:'Niccolò Machiavelli',
    citation:'The Prince',
    year:1532
  }
]

//function to update random background color
const btnclick = document.getElementById('load-quote')
const bodyColor = document.querySelector('body')
const quoteBox = document.getElementById('quote-box')

function getRandomColor() {
  let hex = '#' + Math.floor(Math.random()*16777215).toString(16)
  bodyColor.style.backgroundColor = hex;
  //return hex;
}
btnclick.addEventListener('click',  getRandomColor)
setInterval(getRandomColor, 2000);

/***
 * `getRandomQuote` function
***/

/* Below is the first function I inputted. 
I referred back to the random array index project for guidance.*/
function getRandomQuote() { 
  var randomNumber = Math.floor(Math.random() * quotes.length); //this line will round down to the nearest integer and will return a random number greater that or equal to the range specified which I specified to be the length of quotes.
  let ranQuote = quotes[randomNumber]; // Here, I'm going into quotes array and generating a random quote using the randomNumber formula
  return ranQuote; //will return the random quote 
}  


/*btnclick.addEventListener('click', getRandomQuote() {
  setInterval(1000)
})*/

/*function randomQuoteAndColor(){
  const newQuote = getRandomQuote();
  quoteBox.textContent = newQuote;

  const newColor = getRandomColor();
  bodyColor.style.background = newColor;
}

btnclick.addEventListener('click', function() {
    setInterval(randomQuoteAndColor, 2000);

    randomQuoteAndColor();
});*/

//setInterval(getRandomQuote, 1000);
/* below is a block of code which I had initially tested but was unsure if i could use it
for (let i = 0; i < quotes.length; i++) {
  console.log(quotes[i]);
};


/***
 * `printQuote` function
***/

/* Was struggling with the section below the most, I referred back to the contitional-
string project for guidance but was still unsuccessful. I also researched thoroughly in the 
library and google but still did not find any helpful info.
This was the most confusing in terms of creating a var to call getRandomQuote
and then creating another to call the html strings - this is a concept I am failing to grasp.*/ 


// UPDATE: I took a second look at the conditional string practice project and linke 37 was my guide. 
// The confusing part was knowing how to input and connect the HTML string 
function printQuote() {
  let randomQuote = getRandomQuote(); // Here, I am assigning the getRandomQuote function to the variable randomQuote
  let html = `<p class="quote"> ${randomQuote.quote} </p>`
  html += `<p class="source">${randomQuote.source}` // this is the html string which I am still rusty on 
// - I have difficulty understanding why we need to input the html string here when we can maybe just go to the html doc directly??

if (randomQuote.citation){
  html += `<span class="citation">${randomQuote.citation}</span>`
}

if (randomQuote.year){
  html += `<span class="year">${randomQuote.year} </span>`
}
//html += '</p>'; //I don't understand why the backticks if the <p></p> elements are strings - why can't i just use '' instead of backticks?

if (randomQuote.category){
  html += `<span class="category">, ${randomQuote.category} </span>`
}

console.log(randomQuote);
console.log(randomQuote.year);
console.log(randomQuote.citation);
console.log(randomQuote.category);

document.getElementById('quote-box').innerHTML = html; 
}
 
setInterval(printQuote, 2000);

  // random idea during my thought process - maybe use if (getRandomQuote.includes(citation)){



//Im unsure if I assigned the correct value (quoteStr) to the code below
  

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);