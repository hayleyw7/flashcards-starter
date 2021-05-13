const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const turn = new Turn('pug', card);

    expect(turn.guess).to.equal('pug');
  }); 

  it('should store a guess', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const turn = new Turn('pug', card);

    expect(turn.currentCard).to.equal(card);
  }); 


  it('should store a guess', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const turn = new Turn('pug', card);

    expect(turn.returnGuess()).to.equal('pug');
  }); 

  it('should store a card', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const turn = new Turn('pug', card);

    expect(turn.returnCard()).to.equal(card);
  });  

  it('should return boolean if guess matches correct answer', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const turn = new Turn('pug', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });  

  it('should say if test is correct', function() {
    const card = new Card(
      1,
      'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const turn = new Turn('pug', card);

    expect(turn.evaluateGuess()).to.equal(false);
  }); 
});
