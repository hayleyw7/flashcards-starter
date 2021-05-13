const http = require('http');
let app = http.createServer();
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./src/util');
const Card = require('./src/Card');
const Round = require('./src/Round');
const Deck = require('./src/Deck');
const Turn = require('./src/Turn');
const Game = require('/src/Game');

// Start the server on port 3000
app.listen(3000, '127.0.0.1');  
console.log('Node server running on port 3000'); 

    const card1 = new Card(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

        const card3 = new Card(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

        const card3 = new Card(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

const turn = new Turn([card1, card2, card3);
const deck = new Deck(prototypeQuestions);
const round = new Round(deck);
const game = new Game(round);

game.start(); 