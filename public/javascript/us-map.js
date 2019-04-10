

  var
    numQuestions, numAnswers = 0, numGuesses = 0,
    rightAnswers = 0, wrongAnswers = 0,
    questionIndex, answerIndex;


  playGame = function(element, code, region) {

		if (!code) {
		  numQuestions = prompt("How many questions would you like?");
			generateNextQuestion();
			return;
		}

		if (code == states[questionIndex].abbreviation) {
			rightAnswer();
      playOn()
		}
		else {
			wrongAnswer(code);
			if (numGuesses < 3)
			  { return; }
      else {
	      wrongAnswers++;
	      playOn();
      }
		}

	}


	playOn = function() {
    numAnswers++;
    if (numAnswers < numQuestions)
      generateNextQuestion();
    else
      endGame();
	}

  generateNextQuestion = function() {
    resetMap();
    numGuesses = 0;

    var nextQuestionFound = false;
    while (! nextQuestionFound) {
      var i = Math.floor(Math.random() * 50);
      
      if (! states[i].answered) {
	      console.log('Where is ' + states[i].name + '?');

        questionIndex = i;
        states[i].answered = true;
        nextQuestionFound = true;
      }
    }    
  }


  rightAnswer = function() {
    console.log('CORRECT - GREAT JOB!');

		rightAnswers++
		bonusQuestion();
  }


	bonusQuestion = function() {
		var bonusCapital = prompt('What is the capital of ' + states[questionIndex].name + '?');
		
		if (bonusCapital == states[questionIndex].capital) {
			console.log('Right Again! You scored 1 extra point.');
			rightAnswers++
		}
		else
			{ console.log('Sorry, the capital of ' + states[questionIndex].name + ' is ' + states[questionIndex].capital); }

	}

  
  wrongAnswer = function(code) {
    numGuesses++;
    var guessText;
    for (i = 0; i < states.length; i++) {
      if (states[i].abbreviation == code) {
        if (numGuesses == 1)
          guessText = '2 guesses left';
        else if (numGuesses == 2)
          guessText = '1 guess left'
        else
          guessText = 'Sorry, no more guesses.'

        console.log("No, that's " + states[i].name + ". " + guessText);
      }
    }
  }


  initializeMap = function() {
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
      onRegionClick: function(element, code, region) {
        code = code.toUpperCase();
        playGame(element, code, region);
      }
    }); 
  }


  resetMap = function() {
    $("#vmap").vectorMap('deselect', 'us');
  }


	endGame = function() {
		console.log('GAME OVER');
		console.log('Right Answers: ' + rightAnswers);
		console.log('Wrong Answers: ' + wrongAnswers);
	}


  $(document).ready(function() {
		initializeMap();
  });

