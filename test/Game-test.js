const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {

  it('should be a function', function() {
      
    expect(Game).to.be.a('function');
  });

  it('should create Cards', function() {
    const game = new Game();

    game.start();

    expect(game.deck.cards).to.exist;
  });

  it('should put cards in a deck', function() {
    const game = new Game();

    game.start();

    expect(game.deck.cards).to.deep.equal(prototypeQuestions);
  });

  it('should create new round', function() {
    const game = new Game();

    game.start();

    expect(game.currentRound).to.exist;
  });

  it('should keep track of currentRound', function() {
    const game = new Game();

    game.start();

    expect(game.currentRound).to.equal(game.round);
  });
});
