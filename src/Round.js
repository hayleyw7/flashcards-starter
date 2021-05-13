const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[this.turns];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    let turn = new Turn (guess, this.currentCard);
    this.currentCard = this.deck.cards[this.turns];

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.guess);
    }

    turn.giveFeedback();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const correctGuesses = this.turns - this.incorrectGuesses.length;
    const percentCorrect = (correctGuesses / this.turns) * 100
    return percentCorrect;
  }

  endRound() {
    console.log(`** Round over! ** You answered ` + this.calculatePercentCorrect() + `% of the questions correctly!`)
    return `** Round over! ** You answered ` + this.calculatePercentCorrect() + `% of the questions correctly!`;
  }
}

module.exports = Round;

// npm test test/Round-test.js
