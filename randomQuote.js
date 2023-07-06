const quoteAuthor = document.getElementById('quote-text');
const quoteText = document.getElementById('random-quote-text');
const randomquoteButton = document.getElementById('random-quote-button');
// the url for the API
const url = 'https://api.quotable.io/random';

/**
 * When called: calls the api and gives the response to the DOM
 */
function getQuote() {
  fetch(url, { method: 'GET' })
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP error! status: ${response.status}');
      }
      return response.json();
    })
    .then(data => {
      quoteText.innerHTML = data.content;
      quoteAuthor.innerHTML = data.author;
    })
    .catch(error => console.error(error));
}

// EventListener for the button to call the API again when the button is pressed
randomquoteButton.addEventListener('click', getQuote);