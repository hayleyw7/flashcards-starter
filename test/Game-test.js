const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Card = require('../src/Card');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {

  it('should be a function', function() {
      
    expect(Game).to.be.a('function');
  });

  it('should keep track of currentRound, create Cards, put them in a deck, & create new round', function() {

    function createCard(id, question, answers, correctAnswer) {
      const card = new Card(id, question, answers, correctAnswer);
      return card;
    }

    for (let i = 0; i < prototypeQuestions.length; i++) {

      let newCardArray = [];

      // const {id, question, answers, correctAnswer} = prototypeQuestions[i];

      const newCard = createCard(
        prototypeQuestions[i].id,
        prototypeQuestions[i].question,
        prototypeQuestions[i].answers,
        prototypeQuestions[i].correctAnswer
      );
      newCardArray.push(newCard);
    }

    let deck = new Deck(prototypeQuestions);
    const round = new Round(deck);

    const game = new Game();

    game.start();

    expect(game.currentRound).to.deep.equal(round);
  });
});
