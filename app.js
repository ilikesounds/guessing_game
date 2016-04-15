//This section defines the variables that will be assigned to the DOM elemnt placeholders in index.html
var dlElOne = document.getElementById('q1');
var dlElTwo = document.getElementById('q2');
var dlElThree = document.getElementById('q3');
var dlElFour = document.getElementById('q4');
var dlElFive = document.getElementById('q5');
var dlElSix = document.getElementById('q6');
var ddElOne = document.getElementById('a1');
var ddElTwo = document.getElementById('a2');
var ddElThree = document.getElementById('a3');
var ddElFour = document.getElementById('a4');
var ddElFive = document.getElementById('a5');
var ddElSix = document.getElementById('a6');

//Is there anyway using another array to combine the section above with the section below?

//This section defines the arrays that are made up of the DOM element placeholders
var dlElements = [dlElOne, dlElTwo, dlElThree, dlElFour, dlElFive, dlElSix];
var ddElements = [ddElOne, ddElTwo, ddElThree, ddElFour, ddElFive, ddElSix];

//This is the initial prompt to gather the user's name
var userName = prompt('Tell me your name.');

//This is a counter for questions right and wrong
var counterR = 0;

//This is a section to define the array that contains the questions that make up my guessing game
var questions = [
  'Hi ' + userName + '!Let\'s get started! Do you think I\'m a cat man?',
  'Of my two favorite cardinal sins, which do you think is my most favorite? Gluttony or Sloth?',
  'Given what you\'ve learned about me so far, can you believe I didn\'t get married until I was 35?',
  'I\'m thinking of a number between 1 and 100, what number am I thinking of?',
  'Let\'s try something a little easier. I\'m thinking of a number between 1 and 10. What number am I thinking of?'
];

//This section dfines the array that contains the answers to the guessing game.
var answers = [
  'yes',
  ['gluttony', 'sloth'],
  'no',
  37,
  7,
];

//This is a section to define the array that contains the correct answers responses for the gussing game
var answersRight = [
  'Damn right I am. And vicious little buggers they are. Never turn your back on them I say!',
  'Trick question! They go hand in hand. You can\'t have gluttony without sloth. I can\'t at least!',
  'I know! Right?!? So crazy I wasn\'t snatched up sooner!',
  'Great guess!',
];

//This is a section to define the array that contains the incorrect answers responses for the gussing game
var answersWrong = [
  'HA! You obviously don\'t know the caliber of the man you\'re dealing with. Never trust a man without a cat.',
  'Trick question! They go hand in hand. You can\'t have gluttony without sloth. I can\'t at least!',
  'Very funny. Try again funny person.',
  ['Sorry you guessed to low.', 'Sorry you guessed to high.',],
];


//This function when called will prompt the user with a question from the question array and based on the answer will display a unique response to the specified DOM element for either a correct or incorrect answer. It will also increment the counterR for correct answers or counterW for incorrect answers
function gameText(questions, answers, answersRight, answersWrong, dlElements, ddElements) {
  var userInput = prompt(questions).toLowerCase();
  console.log(userInput);
  if (userInput === answers[0] || userInput === answers[1]) {
    dlElements.textContent = questions;
    ddElements.textContent = answersRight;
    counterR++;
  } else {
    dlElements.textContent = questions;
    ddElements.textContent = answersWrong;
  }
};


function gameNum(questions, answers, answersRight, answersWrong, dlElements, ddElements) {
  var userInput = parseInt(prompt(questions));
  console.log(typeof(userInput));
  console.log(answers);
  while (parseInt(userInput) !== answers) {
    if (parseInt(userInput) < answers) {
      dlElements.textContent = questions;
      ddElements.textContent = answersWrong[0];
      userInput = parseInt(prompt(questions));
    } else if (parseInt(userInput) > answers) {
      dlElements.textContent = questions;
      ddElements.textContent = answersWrong[1];
      userInput = parseInt(prompt(questions));
    }
  }
  dlElements.textContent = questions;
  ddElements.textContent = answersRight;
  counter++;
  console.log(counter);
};

//This section contains the function calls to begin the guessing game.
gameText(questions[0], answers[0], answersRight[0], answersWrong[0], dlElements[1], ddElements[1]);
console.log(counterR);
gameText(questions[1], answers[1], answersRight[1], answersWrong[1], dlElements[2], ddElements[2]);
console.log(counterR);
gameText(questions[2], answers[2],  answersRight[2], answersWrong[2], dlElements[3], ddElements[3]);
console.log(counterR);
gameNum(questions[3], answers[3], answersRight[3], answersWrong[3], dlElements[4],ddElements[4]);
console.log(counterR);
gameNum(questions[4], answers[4], answersRight[3], answersWrong[3], dlElements[5],ddElements[5]);
console.log(counterR);
// alert("Ahoy there " + userName + "! Where be my booty?");
//
// var playGame = prompt("Just kidding, you don't owe me anything. Would you like to play a game, yes or no?");
// var uCase = playGame.toUpperCase();
// var counter = 0;
// console.log(uCase);
// if (uCase === "YES" || uCase === "Y") {
//   var q1 = prompt("Great! Let's get started! Do you think I'm a cat man?");
//   uCase = q1.toUpperCase();
//   console.log(uCase);
//     if (uCase === "YES" || uCase === "Y") {
//       alert("Damn right I am. And vicious little buggers they are. Never turn your back on them I say!");
//       counter ++
//       console.log(counter);
//     } else {
//       alert("HA! You obviously don't know the caliber of the man you're dealing with. Never trust a man without a cat.");
//     }
//
//     var q2 = prompt("Of my two favorite cardinal sins, which do you think is my most favorite? Gluttony or Sloth?");
//     uCase = q2.toUpperCase();
//     console.log(uCase);
//       if (uCase === "GLUTTONY" || uCase === "SLOTH") {
//         alert("Trick question! They go hand in hand. You can't have gluttony without sloth. I can't at least!");
//         counter++
//         console.log(counter);
//       }
//
//       var q3 = prompt("Given what you've learned about me so far, can you believe I didn't get married until I was 35?");
//       uCase = q3.toUpperCase();
//       console.log(uCase);
//         while (uCase === "YES" || uCase === "Y") {
//           var q3 = prompt("Very funny. Try again funny person. ");
//           uCase = q3.toUpperCase();
//         }
//       alert("I know! Right?!? So crazy I wasn't snatched up sooner!");
//       counter++
//       console.log(counter);
//
//       var q4 = parseInt(prompt("Only two more questions. I'm thinking of a number between 1 and 100. What number am I thinking of?"))
//
//       var q4Answer = 37;
//
//       if (q4 < q4Answer) {
//         alert("Sorry you guessed to low.");
//       } else if (q4 > q4Answer) {
//         alert("Sorry you guessed to high.");
//       } else {
//         alert("Holy cow! How did you guess that on the first try?!?");
//         counter++
//         console.log(counter);
//       }
//
//       var q5 = parseInt(prompt("Last question. I'll make this one a little easier than the last question. I'm thinking of a number between 1 and 10. What number am I thinking of?"));
//       var answer = 7
//
//       while (q5 !== answer) {
//         if (q5 > answer) {
//           q5 = parseInt(prompt("You guessed too high. Try again."));
//         } else if (q5 < answer) {
//           q5 = parseInt(prompt("You guessed to low. Try again"));
//         }
//       }
//       alert("Great job! You guessed my number!");
//       counter++
//       console.log(counter);
// }

// else {
//   alert("Awwwwwww, you're no fun.");
// }
// alert("You managed to get " + counter + " questions correct. Better than nothing, right?");
