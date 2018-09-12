const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "http://res.cloudinary.com/jkeohan/image/upload/v1511808103/queen-of-hearts_nbvwls.png"
  },

  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "http://res.cloudinary.com/jkeohan/image/upload/v1511808103/queen-of-diamonds_opxv6b.png"
  },

  {
    rank: "king",
    suit: "hearts",
    cardImage: "http://res.cloudinary.com/jkeohan/image/upload/v1511808103/king-of-hearts_njmwml.png"
  },

  {
    rank: "king",
    suit: "diamonds",
    cardImage: "http://res.cloudinary.com/jkeohan/image/upload/v1511808103/king-of-diamonds_mpn7sm.png"
  }
];

const cardsInPlay = [];

const checkForMatch = function() {
  if(cardsInPlay.length === 2) {
    if(cardsInPlay[0] === cardsInPlay[1]) {
      document.getElementById('message').innerHTML = "You found a match"
      document.getElementById('message').style.display = "block"
      document.getElementById('game-board').style.opacity = 0.3
      // alert("You found a match");
    } else {
      document.getElementById('message').innerHTML = "Sorry, not a match"
      document.getElementById('message').style.display = "block"
      document.getElementById('game-board').style.opacity = 0.3
    }
  }
}

const flipCard = function() {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage)
  cardsInPlay.push(cards[cardId].rank);
  setTimeout(checkForMatch,150)
  ;
}

const createBoard = function() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "http://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
