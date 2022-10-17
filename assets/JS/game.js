// Declaring variables from the DOM
var mainPage = document.querySelector('#mainSection');
var question = document.querySelector('#question');
var startEl = document.querySelector('#start');
var startBtn = document.querySelector('#startBtn');

var button1 = document.querySelector('#answer1');
var button2 = document.querySelector('#answer2');
var button3 = document.querySelector('#answer3');
var button4 = document.querySelector('#answer4');

// Adding event listeners to the buttons
startBtn.addEventListener('click', startGame);
button1.addEventListener('click', answerQuestion);
button2.addEventListener('click', answerQuestion);
button3.addEventListener('click', answerQuestion);
button4.addEventListener('click', answerQuestion);

// DECLARE 'countdown' variable
var countdown = 0;

var score = 0;

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

// DECLARE the 'timerEl'
var timerEl = document.querySelector('#timer');


// Function startGame
function startGame() {
    // Hide the start screen
    startEl.style.display = 'none';

    // Display the first question (Display the current question)
    var content = questions[questionPosition].question;
    question.innerHTML = content;

    button1.textContent = questions[questionPosition].answers[0];
    button2.textContent = questions[questionPosition].answers[1];
    button3.textContent = questions[questionPosition].answers[2];
    button4.textContent = questions[questionPosition].answers[3];

    // Set timer to 60 seconds
    countdown = 60;

    // Start the timer 'startTimer'
    startTimer(countdown);
}
    
//var questionEl = document.querySelector('#question');
// Function 'endGame'
function endGame() {
    console.log("Running the endGame function");
    // Hide the questions area
    mainPage.style.display = "none";

    // Show the record high score
    recordHighScore();
}

// Function 'answerQuestion'
function answerQuestion(event) {
    // Check if the selected answer is correct
    answer = event.target.textContent;
    console.log(answer);
    console.log(`questionPosition BEFORE answer: ${questionPosition}`);

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

    console.log(score);
    console.log(`questionPosition AFTER answer: ${questionPosition}`);

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
    // Need to restart the timer

    // Display the current question
        //questions[questionPosition];
    var content = questions[questionPosition].question;
    question.innerHTML = content;

    button1.textContent = questions[questionPosition].answers[0];
    button2.textContent = questions[questionPosition].answers[1];
    button3.textContent = questions[questionPosition].answers[2];
    button4.textContent = questions[questionPosition].answers[3];
}

// Function 'recordHighScore'
function recordHighScore() {

}