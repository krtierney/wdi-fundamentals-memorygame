//Define variable 'cards' containing an array
var cards = ['queen', 'queen', 'king', 'king'];

//call Fisher-Yates function to shuffle cards in the array
fisherYates(cards);

//Define an empty array to hold the cards in play
var cardsInPlay = [];

//Define a variable for the game board
var board = document.getElementById('game-board');

//Function to populate the game board with cards
var createBoard = function() {
      //iterate through the cards array
  for (var i = 0; i < cards.length; i++) {
    //create new div for each card;
    var cardElement = document.createElement('div');
    //assign the 'card' class to each new card
    cardElement.className = 'card';
    //set card's data-card to an element of the array (king or queen)
    cardElement.setAttribute('data-card', cards[i]);
    //add new cards to the game board div
    board.appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);
    //execute isTwoCards function when a card is clicked
    cardElement.addEventListener('click', isTwoCards);
  }
};

//displays card face image
var flipCard = function() {
  if (this.getAttribute('data-card') === 'queen') {
    this.innerHTML = '<img src="queen.png" alt="Queen" />';
  } else {
    this.innerHTML = '<img src="king.png" alt="King" />';
  }
};

var isTwoCards = function() {
  //add clicked card to an array of cards in play
  cardsInPlay.push(this);
//call isMatch function when two cards are clicked
  if (cardsInPlay.length === 2) {
    //delay alert until after card image is displayed
    setTimeout(function() { 
      isMatch(cardsInPlay);
      //clear cards in play for next try
      cardsInPlay[0].innerHTML = '';
      cardsInPlay[1].innerHTML = '';
      cardsInPlay = [];
    }, 100);
  }
};

//check for match between clicked cards
var isMatch = function() {
  if (cardsInPlay[0].getAttribute('data-card') === cardsInPlay[1].getAttribute('data-card')) {
    alert('You found a match!');
  } else {
    alert('Try again.');
  }
};

//Fisher-Yates shuffle to randomize card values
function fisherYates (myArray) {
  var i = myArray.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = myArray[i];
     var tempj = myArray[j];
     cards[i] = tempj;
     cards[j] = tempi;
   }
}

createBoard();
