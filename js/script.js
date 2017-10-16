// event listener to display a random quote on page load
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.addEventListener('load', printQuote, true);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// variable set to an empty array to be used later
var viewedQuotes = [];

// Changes quote every X seconds
// var intervalID = window.setInterval(printQuote, 10000);

// 1. if the quotes array is empty
// 2. the quotes array is set to equal the viewedQuotes array
// 3. then the viewedQuotes array is set to an empty array
// 4. and the getRandomQuote function is called to start the loop over, otherwise,
// 5. a random index is generated from the quotes array, removed using the splice method, and returned
// 6. the returned element is stored in the variable random quote and added to the variable viewedQuotes using the push method
// 7. returned element is logged in the console and again returned
function getRandomQuote() {
  if (quotes.length === 0) {
    quotes = viewedQuotes;
    viewedQuotes = [];
    return getRandomQuote();
  } else {
      var randomQuote = quotes.splice(Math.floor(Math.random() * quotes.length), 1)[0];
      viewedQuotes.push(randomQuote);
      console.log(randomQuote);
      return randomQuote;
  }
}

// 1. calls the getRandomQuote function and stores it in a variable named printQuote
// 2. create a variable named HTML and concatenates the string into a message to display in the HTML
// 3. use array.property to access the specific element in the array
function printQuote() {
  var printQuote = getRandomQuote();
  var HTML = '';
  HTML += '<p class="quote">' + printQuote.quote + '</p>';
  HTML += '<p class="source">' + printQuote.source;
  //HTML += '<span class="title">' + printQuote.title + '</span>';

  if (printQuote.hasOwnProperty("citation")) {
    HTML += '<span class="citation">' + printQuote.citation + '</span>';
  }

  if (printQuote.hasOwnProperty("date")) {
    HTML += '<span class="date">' + printQuote.date + '</span>';
  }

  HTML += '<span class="blog">' + printQuote.blog + '</span>';
  HTML += '</p>';

  // string is made, which links to the quote-box and dynamically inserts into the HTML
  // calls the getRandomColor function which generates a random color and then changes the background color of the body
  // both are included in the printQuote function so they can be triggered in the event listeners
  document.getElementById('quote-box').innerHTML = HTML;
  document.body.style.backgroundColor = getRandomColor();
}

// 1. generates a random color by concantenating the string and number components that make up an rgb color model
// 2. saves it to a variable named color
// 3. returns the color variable
function getRandomColor () {
  var color = 'rgb(' + Math.floor(Math.random()*200) + ', ' + Math.floor(Math.random()*200) + ', ' + Math.floor(Math.random()*200) + ')';
  return color;
}
