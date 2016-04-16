//This section defines the variables that will be assigned to the DOM elemnt placeholders in index.html
var pq1 = document.getElementById('q1');
var pq2 = document.getElementById('q2');
var pq3 = document.getElementById('q3');
var pq4 = document.getElementById('q4');
var pq5 = document.getElementById('q5');
var pa1 = document.getElementById('a1');
var pa2 = document.getElementById('a2');
var pa3 = document.getElementById('a3');
var pa4 = document.getElementById('a4');
var pa5 = document.getElementById('a5');

//This section defines the arrays that are made up of the DOM element placeholders
var pqEl = [pq1, pq2, pq3, pq4, pq5];
var paEl = [pa1, pa2, pa3, pa4, pa5];

//This is the initial prompt to gather the user's name
var userName = prompt('Tell me your name.');

//This is a counter for questions right and wrong
var counter = 0;

//This is a section to define the array that contains the questions that make up my guessing game
var questions = [
  'Hi ' + userName + '! Let\'s get started! Do you think I\'m a cat man?',
  'Of my two favorite cardinal sins, which do you think is my most favorite? Gluttony or Sloth?',
  'Given what you\'ve learned about me so far, can you believe I didn\'t get married until I was 35?',
  'How old do you think I am?',
  'Let\'s try something a little easier. I\'m thinking of a number between 1 and 10. What number am I thinking of?',
];

//This section defines the array that contains the answers to the guessing game.
var answers = [
  ['yes', 'y'],
  ['gluttony', 'sloth'],
  ['no', 'n'],
  37,
  7,
];

//This is a section to define the array that contains the correct answers responses for the gussing game
var answersRight = [
  'Damn right I am. And vicious little buggers they are. Never turn your back on them I say!',
  'Trick question! They go hand in hand. You can\'t have gluttony without sloth. I can\'t at least!',
  'I know! Right?!? So crazy I wasn\'t snatched up sooner!',
  'You guessed 37 and got it right! Great guess!',
  'You guessed 7 and got it right! Great guess!',
];

//This is a section to define the array that contains the incorrect answers responses for the gussing game
var answersWrong = [
  'Wrong answer chum. You obviously don\'t know the caliber of the man you\'re dealing with. Never trust a man without a cat.',
  'Trick question! They go hand in hand. You can\'t have gluttony without sloth. I can\'t at least!',
  'Wrong answer again, bub! I\'ll be keeping my eye on you smarty pants!',
  ['That\'s very sweet, but that\'s too low.', 'You\'re wrong and that hurt. Try again.',],
  ['Sorry you guessed to low.', 'Sorry you guessed to high.',],
];

//This function when called will prompt the user with a question from the question array and based on the answer will display a unique response to the specified DOM element for either a correct or incorrect answer. It will also increment the counter for correct answers.
function game(questions, answers, answersRight, answersWrong, pqEl, paEl) {
  var userInput = prompt(questions);
  console.log(userInput);
  if (isNaN(parseInt(userInput)) === false) {
    userInput = parseInt(userInput);
    while (parseInt(userInput) !== answers) {
      if (parseInt(userInput) < answers) {
        pqEl.textContent = questions;
        paEl.textContent = answersWrong[0];
        userInput = parseInt(prompt(questions));
      } else if (parseInt(userInput) > answers) {
        pqEl.textContent = questions;
        paEl.textContent = answersWrong[1];
        userInput = parseInt(prompt(questions));
      }
    }
    counter++;
    pqEl.textContent = 'Question: ' + questions;
    paEl.textContent = 'Correct Answer (' + answers + '): ' + answersRight +'. You\'ve gotten ' + counter + ' correct! Good job!';
  } else if (userInput.toLowerCase() === answers[0] || userInput.toLowerCase() === answers[1]) {
    counter++;
    pqEl.textContent = 'Question: ' + questions;
    paEl.textContent = 'Correct Answer (' + answers + '): ' + answersRight +'. You\'ve gotten ' + counter + ' correct! Good job!';
  } else {
    pqEl.textContent = 'Question: ' + questions;
    paEl.textContent = 'Incorrect Answer (The correct answer was: (' + answers + ')): ' + answersWrong;
  }
}

//This section contains the for loop that iterates the function calls to begin the guessing game.
for (i = 0; i <= 4; i++) {
    game(questions[i], answers[i], answersRight[i], answersWrong[i], pqEl[i], paEl[i]);
};
