const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    const newCards = prototypeQuestions.map((card) => {
    return new Card(card.id, card.question, card.answers, card.correctAnswer);
  })
    let deck = new Deck(newCards);
    let round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, this.currentRound);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${
      this.currentRound.deck.countCards()
    } cards.
-----------------------------------------------------------------------`)  
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;

// npm test test/Game-test.js  