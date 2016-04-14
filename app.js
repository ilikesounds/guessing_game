var dlElOne = document.getElementById('q1');
var dlElTwo = document.getElementById('q2');
var dlElThree = document.getElementById('q3');
var dlElFour = document.getElementById('q4');
var ddElOne = document.getElementById('a1');
var ddElTwo = document.getElementById('a2');
var ddElThree = document.getElementById('a3');
var ddElFour = document.getElementById('a4');

var userName = prompt('Tell me your name.');

var counterR = 0;
var counterW = 0;

var dlElements = [dlElOne, dlElTwo, dlElThree, dlElFour];
var ddElements = [ddElOne, ddElTwo, ddElThree, ddElFour];

var questions = [
  'Hi ' + userName + '!Let\'s get started! Do you think I\'m a cat man?',
  'Of my two favorite cardinal sins, which do you think is my most favorite? Gluttony or Sloth?',
  'Given what you\'ve learned about me so far, can you believe I didn\'t get married until I was 35?',
  'I\'m thinking of a number between 1 and 100, what number am I thinking of?',
  'Let\'s try something a little easier. I\'m thinking of a number between 1 and 10. What number am I thinking of?'
];

var answersRight = [
  'Damn right I am. And vicious little buggers they are. Never turn your back on them I say!',
  'Trick question! They go hand in hand. You can\'t have gluttony without sloth. I can\'t at least!',
  'I know! Right?!? So crazy I wasn\'t snatched up sooner!',
  37,
  'Great guess! How\'d you get that on one try?',
  7,
];

var answersWrong = [
  'HA! You obviously don\'t know the caliber of the man you\'re dealing with. Never trust a man without a cat.',
  'Trick question! They go hand in hand. You can\'t have gluttony without sloth. I can\'t at least!',
  'Very funny. Try again funny person.',
  'Sorry you guessed to low.',
  'Sorry you guessed to high.',
];


function game(questions, answersRight, answersWrong, dlElements, ddElements) {
  var userInput = prompt(questions).toLowerCase();
  console.log(userInput);
  if (userInput === answersRight) {
    dlElements.textContent = questions;
    ddElements.textContent = answersRight;
    counterR++;
    } else {
    dlElements.textContent = questions;  
    ddElements.textContent = answersWrong;
    counterW++;
  }
}

game(questions[0], answersRight[0], answersWrong[0], dlElements[0], ddElements[0]);
game(questions[1], answersRight[1], answersWrong[1], dlElements[1], ddElements[1]);
game(questions[2], answersRight[2], answersWrong[2], dlElements[2], ddElements[2]);
game(questions[3], answersRight[3], answersWrong[3], dlElements[3], ddElements[3]);
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
