var counter = 0;

var userName = prompt('Tell me your name.');

var pq = [
  document.getElementById('pq1'),
  document.getElementById('pq2'),
  document.getElementById('pq3'),
  document.getElementById('pq4'),
  document.getElementById('pq5')
];

var pa = [
  document.getElementById('pa1'),
  document.getElementById('pa2'),
  document.getElementById('pa3'),
  document.getElementById('pa4'),
  document.getElementById('pa5'),
];

var images = [
  document.getElementById('imgPlace1'),
  document.getElementById('imgPlace2'),
  document.getElementById('imgPlace3'),
  document.getElementById('imgPlace4'),
  document.getElementById('imgPlace5'),
]

var questions = [
  'Do you think I\'m a cat man?',
  'Of my two favorite cardinal sins, which do you think is my most favorite? Gluttony or Sloth?',
  'Given what you\'ve learned about me so far, can you believe I didn\'t get married until I was 35?',
  'How old do you think I am?',
  'I\'m thinking of a number between 1 and 10. What number am I thinking of?'
];

var answers = [
  ['yes', 'y'],
  ['gluttony', 'sloth'],
  ['no', 'n'],
  37,
  7,
];

var answersRight = [
  'Damn right I am. And vicious little buggers they are. Never turn your back on them I say!',
  'Trick question! They go hand in hand. You can\'t have gluttony without sloth. I can\'t at least!',
  'I know! Right?!? So crazy I wasn\'t snatched up sooner!',
  'You guessed 37 and got it right! Great guess!',
  'You guessed 7 and got it right! Great guess!',
];

var answersWrong = [
  'Wrong answer chum. You obviously don\'t know the caliber of the man you\'re dealing with. Never trust a man without a cat.',
  'Trick question! They go hand in hand. You can\'t have gluttony without sloth. I can\'t at least!',
  'Wrong answer again, bub! I\'ll be keeping my eye on you smarty pants!',
  ['That\'s very sweet, but that\'s too low.', 'You\'re wrong and that hurt.',],
  ['Sorry you guessed to low.', 'Sorry you guessed to high.',],
];

function game(ques, ans, ansRight, ansWrong, pQues, pAns, image) {
  document.getElementById('introState').textContent = 'Hi ' + userName + '!' ;

  var userInput = prompt('All right ' + userName + '! ' + ques);

  if(isNaN(parseInt(userInput)) === false) {
    userInput = parseInt(userInput)
  }

  if (typeof userInput === 'string') {
    pQues.textContent = ques;
    if (userInput.toLowerCase() === ans[0] || userInput.toLowerCase() === ans[1]) {
    counter++;
    console.log('This answer is correct. The counter is currently ' + counter);
    pAns.className = 'correct';
    pAns.textContent = ansRight;
    image.src = './img/carl_right.jpg';
    console.log(counter);
    } else {
      console.log('This answer is incorrect. The counter is currently ' + counter);
      pAns.className = 'incorrect';
      pAns.textContent = ansWrong;
      image.src = './img/carl_wrong.jpg';
      }
    } else {
      var left = 2;
      pQues.textContent = ques;

      while (parseInt(userInput) !== ans) {
        if (left === 0) {
          break;
        }
        if (parseInt(userInput) < ans) {
          left--;
          pAns.textContent = ansWrong[0];
          pAns.className = 'incorrect';
          image.src = './img/carl_wrong.jpg';
          userInput = parseInt(prompt(ansWrong[0] + ' ' + ques + ' You have ' + left + ' tries left.'));
          console.log('This answer is incorrect. The counter is currently ' + counter);
        } else if (parseInt(userInput) > ans) {
          left--;
          pAns.textContent = ansWrong[1];
          pAns.className = 'incorrect';
          image.src = './img/carl_wrong.jpg';
          userInput = parseInt(prompt(ansWrong[1] + ' ' + ques + ' You have ' + left + ' tries left.'));
          console.log('This answer is incorrect. The counter is currently ' + counter);
        }
      }
      if (parseInt(userInput) === ans) {
        counter++;
        console.log(counter);
        pAns.textContent = ansRight;
        pAns.className = 'correct';
        image.src = './img/carl_right.jpg';
        console.log('This answer is correct. The counter is currently ' + counter);

      }
    }
    console.log(counter);
  if(counter === 5) {
  document.getElementById('finalCount').textContent = 'You got ' + counter + ' right! It\'s kind of creepy that you know me this well. Should I be worried?';
  } else if (counter <= 4 && counter >= 2) {
    document.getElementById('finalCount').textContent = 'You got ' + counter + ' right! You know me as well as some of my best friends!';
  } else {
    document.getElementById('finalCount').textContent = 'You got ' + counter + ' right! You don\'t know me at all!';
  }
}

for(var i = 0; i <= 2; i++) {
  game(questions[i], answers[i], answersRight[i], answersWrong[i], pq[i], pa[i], images[i]);
};

for(var i = 3; i < 5; i++) {
  game(questions[i], answers[i], answersRight[i], answersWrong[i], pq[i], pa[i], images[i]);
};
