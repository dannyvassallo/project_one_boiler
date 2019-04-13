

let numQuestions; let numAnswers = 0; let numGuesses = 0;
let rightAnswers = 0; let wrongAnswers = 0;
let answeringBonus = false; let bonusCapital;
let questionIndex; let answerIndex;


playGame = function (element, code, region) {
  if (!code) {    
    numQuestions = $("input[nq]:checked").val()
    console.log('numQuestions = ' + numQuestions);
    numQuestions = 5;

    console.log('numQuestions = ' + numQuestions);
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
      $('#wrong-answers').text(wrongAnswers);
      playOn();
    }
  }
};


playOn = function () {
  if (! answeringBonus) {
    numAnswers++;
    if (numAnswers < numQuestions) generateNextQuestion();
    else endGame();
  }
};

rightAnswer = function () {
  $('#display-bonus-question').html(`Right! Bonus question:<br>What is the capital of ${jqvStates[questionIndex].name}?`);
  console.log(`Right! Bonus question: What is the capital of ${jqvStates[questionIndex].name}?`);

  answeringBonus = true;
  rightAnswers++;
  $('#right-answers').text(rightAnswers);
  //bonusQuestion();
};


bonusQuestion = function () {
  answeringBonus = false;
  bonusCapital = $('#bq').val(); console.log('bonusCapital = ' + bonusCapital);

  if (bonusCapital == jqvStates[questionIndex].capital) {
    $('#display-bonus-answer').text('Right Again! You get an extra point.');
    console.log('Right Again! You get an extra point.');
    rightAnswers++;
    $('#right-answers').text(rightAnswers);
  } else {
    $('#display-bonus-answer').text(`Sorry, the capital of ${jqvStates[questionIndex].name} is ${jqvStates[questionIndex].capital}`);
    console.log(`Sorry, the capital of ${jqvStates[questionIndex].name} is ${jqvStates[questionIndex].capital}`);
  }

  setTimeout(function() {
    $('#display-bonus-question').html("");
    $('#display-bonus-answer').text("");
    $('#bq').val("");
    generateNextQuestion();
  }, 3000);

};


wrongAnswer = function (code) {
  numGuesses++;
  let guessText;
  for (i = 0; i < jqvStates.length; i++) {
    if (jqvStates[i].abbreviation == code) {
      if (numGuesses == 1) guessText = '2 guesses left';
      else if (numGuesses == 2) guessText = '1 guess left';
      else guessText = 'Sorry, no more guesses.';
    }


    setTimeout(function() {
      $('#display-guesses-left').text(`No, that's ${jqvStates[i].name}. ${guessText}`);
      console.log(`No, that's ${jqvStates[i].name}. ${guessText}`);
    }, 3000);
    $('#display-guesses-left').text(``);
  }
};


generateNextQuestion = function () {
  resetMap();
  numGuesses = 0;

  let nextQuestionFound = false;
  while (!nextQuestionFound) {
    const i = Math.floor(Math.random() * 50);

    if (!jqvStates[i].answered) {
	    $('#display-question').text(`Where is ${jqvStates[i].name}?`);
	    console.log(`Where is ${jqvStates[i].name}?`);

      questionIndex = i;
      jqvStates[i].answered = true;
      nextQuestionFound = true;
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
