// Declaring variables from the DOM
var mainPage = document.querySelector('#mainSection');
var question = document.querySelector('#question');
var startEl = document.querySelector('#start');
var startBtn = document.querySelector('#startBtn');
var scoreRecorder = document.querySelector('#scoreRecorder');
var timerEl = document.querySelector('#timer');
var scoreResults = document.querySelector('#endGameResult');

var button1 = document.querySelector('#answer1');
var button2 = document.querySelector('#answer2');
var button3 = document.querySelector('#answer3');
var button4 = document.querySelector('#answer4');
var recordScore = document.querySelector('#recordScore');

// Adding event listeners to the buttons
startBtn.addEventListener('click', startGame);
button1.addEventListener('click', answerQuestion);
button2.addEventListener('click', answerQuestion);
button3.addEventListener('click', answerQuestion);
button4.addEventListener('click', answerQuestion);
recordScore.addEventListener('click', recordHighScore);

// Keep mainPage and scoreRecorder hidden at the beginning
mainPage.style.display = 'none';
scoreRecorder.style.display = 'none';

// DECLARE countdown and score variables
var countdown = 0;
var score = 0;
var highScore = 0;

// DECLARE 'questions' array
var questionPosition = 0;
var questions = [
    {
        //question
        question: "How do you write \"Hello World\" in an alert box?",
        //answers
        answers: ["alert(\"Hello World\");", "alertBox(\"Hello World\");", "msg(\"Hello World\");", "msgBox(\"Hello World\");"],
        //correct answers
        correct: "alert(\"Hello World\");"
    },
    {
        //question
        question: "How do you create a function?",
        //answers
        answers: ["function myFunction()", "function:myFunction()", "function = myFunction()", "None of the above"],
        //correct answers
        correct: "function myFunction()"
    },
    {
        //question
        question: "How do you call a function named \"myFunction\"?",
        //answers
        answers: ["call myFunction()", "call function myFunction()", "myFunction()", "None of the above"],
        //correct answers
        correct: "myFunction()"
    },
    {
        //question
        question: "How do you write an IF statement?",
        //answers
        answers: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i = 5 then"],
        //correct answers
        correct: "if (i == 5)"
    },
    {
        //question
        question: "Arrays in JavaScript can be used to store:",
        //answers
        answers: ["numbers and strings", "other arrays", "booleans", "All of the above"],
        //correct answers
        correct: "All of the above"
    },
    {
        //question
        question: "What does a comment in JavaScript look like?",
        //answers
        answers: ["<!--This is a comment-->", "\'This is a comment", "//This is a comment", "!This is a comment"],
        //correct answers
        correct: "//This is a comment"
    }
];

console.log(questions.length);

function startTimer() {  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        // As long as the `countdown` is greater than 1
        if (countdown > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = countdown;
            // Decrement `countdown` by 1
            countdown--;
        } else if (countdown === 1) {
            // When `countdown` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = countdown;
            countdown--;
        } else {
            timerEl.textContent = '0';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // End the game if we hit 0 seconds
        }
    }, 1000);
}

var currentQuestion = questions[questionPosition];

// Function startGame
function startGame() {
    // Hide the start screen
    startEl.style.display = 'none';
    mainPage.style.display = 'initial';

    // Set timer to 60 seconds, questionPosition to 0
    countdown = 60;
    questionPosition = 0;    

    // Display the first question (Display the current question)
    var content = questions[questionPosition].question;
    question.innerHTML = content;

    button1.textContent = questions[questionPosition].answers[0];
    button2.textContent = questions[questionPosition].answers[1];
    button3.textContent = questions[questionPosition].answers[2];
    button4.textContent = questions[questionPosition].answers[3];

    // Start the timer 'startTimer'
    startTimer(countdown);
}
    
// Function 'answerQuestion'
function answerQuestion(event) {
    // Check if the selected answer is correct
    answer = event.target.textContent;

    if(answer === questions[questionPosition].correct) {
        console.log("Correct Answer!");
        questionPosition++;
        score++;

    } else {
        // IF the answer is wrong
        console.log("Wrong Answer!");
        // Subtract 10 from countdown
        countdown -= 10;
        questionPosition++;
    }

    // IF I've passed the last question
    if(questionPosition >= questions.length){
        countdown = 0;
        endGame();
    } else {
        // Display the current question
        displayCurrentQuestion();
    }
}

// Function 'displayCurrentQuestion'
function displayCurrentQuestion() {
    // Display the current question
    var content = questions[questionPosition].question;
    question.innerHTML = content;

    button1.textContent = questions[questionPosition].answers[0];
    button2.textContent = questions[questionPosition].answers[1];
    button3.textContent = questions[questionPosition].answers[2];
    button4.textContent = questions[questionPosition].answers[3];
}

// Function 'endGame'
function endGame() {
    // Hide the questions area
    mainPage.style.display = "none";

    // Show the record high score
    showHighScore();
}

// Function for displaying the user's score and the current high score
function showHighScore() {
    // Make the highscore and recording section visible
    scoreRecorder.style.display = "initial";

    // Creating variable for storing what will display
    var content = ``;

    // IF/ELSE to see if user has a higher, lower, or equal score than the high score
    if(score > highScore){
        content = `Your score is ${score}, which is higher than the highscore of ${highScore}. Congrats!`;
        // Save the score as the new highscore
        highScore = score;
    } else if (score < highScore) {
        content = `Your score is ${score}, which is lower than the highscore of ${highScore}. Good luck next time!`;
    } else {
        content = `Your score is ${score}, which is the same as the highscore of ${highScore}. Congrats!`;
    }

    // Display high score and user's score
    scoreResults.textContent = content;
}

// Function 'recordHighScore'
function recordHighScore() {
    // Getting the user's initials
    var initials = document.querySelector('#name').value;

    // Declare array of initials and scores
    // var initialsList = [];
    // var scoresList = [];

    // Get the initials and scores from localstorage if already existing
    try{
        var storedInitials = JSON.parse(localStorage['initialsList']);
        var storedScores = JSON.parse(localStorage['scoresList']);
    } catch {
        storedInitials = [];
        storedScores = [];
    }

    // IF/ELSE to see if we need to set a new highscore
    // Checking if equal because if user score WAS higher, highscore was overwritten
    if(score === highScore){
        // Save the highscore in local storage
        localStorage.setItem("highscore", highScore);

        // Save the user's initials and score
        storedScores.push(score);
        storedInitials.push(initials);
        localStorage.setItem(`scoresList`, JSON.stringify(storedScores));
        localStorage.setItem(`initialsList`, JSON.stringify(storedInitials));
    } else {
        //Save the user's initials and score
        storedScores.push(score);
        storedInitials.push(initials);
        localStorage.setItem(`scoresList`, JSON.stringify(storedScores));
        localStorage.setItem(`initialsList`, JSON.stringify(storedInitials));
    }

    // Hide the recording section and go back to the start
    scoreRecorder.style.display = 'none';
    startEl.style.display = "initial";
}