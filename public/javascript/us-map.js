

let
  numQuestions; let numAnswers = 0; let numGuesses = 0;
let rightAnswers = 0; let wrongAnswers = 0;
let questionIndex; let
  answerIndex;


playGame = function(element, code, region) {
  if (!code) {
		//numQuestions = prompt('How many questions would you like?');
    //numQuestions = document.getElementById('mapQuestion1').value;
    numQuestions = 5;
		//console.log('numQuestions = ' + numQuestions);
    generateNextQuestion();
    return;
  }

  if (code == jqvStates[questionIndex].abbreviation) {
    rightAnswer();
    playOn();
  } else {
    wrongAnswer(code);
    if (numGuesses < 3) { } else {
	      wrongAnswers++;
	      playOn();
    }
  }
};


playOn = function () {
  numAnswers++;
  if (numAnswers < numQuestions) generateNextQuestion();
  else endGame();
};

generateNextQuestion = function () {
  resetMap();
  numGuesses = 0;

  let nextQuestionFound = false;
  while (!nextQuestionFound) {
    // figure out random state:
    const i = Math.floor(Math.random() * 50);
    // ask about random 

    if (!jqvStates[i].answered) {
	    console.log(`Where is ${jqvStates[i].name}?`);
	    $(".question-target").text(`Where is ${jqvStates[i].name}?`)
	    

      questionIndex = i;
      jqvStates[i].answered = true;
      nextQuestionFound = true;
    }
  }
};


rightAnswer = function () {
  console.log('CORRECT - GREAT JOB!');

  rightAnswers++;
  bonusQuestion();
};


bonusQuestion = function () {
  const bonusCapital = prompt(`What is the capital of ${jqvStates[questionIndex].name}?`);

  if (bonusCapital == jqvStates[questionIndex].capital) {
    console.log('Right Again! You scored 1 extra point.');
    rightAnswers++;
  } else {
    $('.wrong-answer-info').text(`Sorry, the capital of ${jqvStates[questionIndex].name} is ${jqvStates[questionIndex].capital}`);
    console.log(`Sorry, the capital of ${jqvStates[questionIndex].name} is ${jqvStates[questionIndex].capital}`);
    }
};


wrongAnswer = function (code) {
  numGuesses++;
  let guessText;
  for (i = 0; i < jqvStates.length; i++) {
    if (jqvStates[i].abbreviation == code) {
      if (numGuesses == 1) guessText = '2 guesses left';
      else if (numGuesses == 2) guessText = '1 guess left';
      else guessText = 'Sorry, no more guesses.';

      console.log(`No, that's ${jqvStates[i].name}. ${guessText}`);
    }
  }
};


initializeMap = function () {
  $('#vmap').vectorMap({
    map: 'usa_en',
    backgroundColor: '#a5bfdd',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    enableZoom: true,
    hoverColor: '#c9dfaf',
    hoverOpacity: null,
    multiSelectRegion: true,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: null,
    showTooltip: true,
    onRegionClick(element, code, region) {
      code = code.toUpperCase();
      playGame(element, code, region);
    },
  });
};


resetMap = function () {
  $('#vmap').vectorMap('deselect', 'us');
};


endGame = function () {
  console.log('GAME OVER');
  console.log(`Right Answers: ${rightAnswers}`);
  console.log(`Wrong Answers: ${wrongAnswers}`);
};


$(document).ready(() => {
  initializeMap();
});
