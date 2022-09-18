// DECLARE 'countdown' variable
var countdown = 0;

// DECLARE 'questions' array
var questionPosition = 0;
var questions = [
    {
        //question
        question: "How do you write \"Hello Worl\" in an alert box?",
        //answers
        answers: ["alert(\"Hello World\");", "alertBox(\"Hello World\");", "msg(\"Hello World\");", "msgBox(\"Hello World\");"],
        //correct answers
        correct: "alert(\"Hello World\");"
    },
    {
        //question
        question: "How do you create a function?",
        //answers
        answers: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
        //correct answers
        correct: "function myFunction()"
    },
    {
        //question
        question: "How do you call a function named \"myFunction\"?",
        //answers
        answers: ["call myFunction()", "call function myFunction()", "myFunction()"],
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
        answers: ["//This is a comment", "\'This is a comment", "<!--This is a comment-->"],
        //correct answers
        correct: "//This is a comment"
    }
    // {
    //     //question
    //     question: "",
    //     //answers
    //     answers: ["", "", "", ""],
    //     //correct answers
    //     correct: ""
    // },
    // {
    //     //question
    //     question: "",
    //     //answers
    //     answers: ["", "", "", ""],
    //     //correct answers
    //     correct: ""
    // },
    // {
    //     //question
    //     question: "",
    //     //answers
    //     answers: ["", "", "", ""],
    //     //correct answers
    //     correct: ""
    // },
    // {
    //     //question
    //     question: "",
    //     //answers
    //     answers: ["", "", "", ""],
    //     //correct answers
    //     correct: ""
    // },
    // {
    //     //question
    //     question: "",
    //     //answers
    //     answers: ["", "", "", ""],
    //     //correct answers
    //     correct: ""
    // }
];

// DECLARE a 'timerInterval'
var timeInterval;

function startTimer(timeLeft) {  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = '0';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `answerQuestion` function to go to next question
        answerQuestion();
      }
    }, 1000);
  }
  

var currentQuestion = questions[questionPosition];

// DECLARE the 'timerEl'
var timerEl = document.querySelector('#timer');

// Function startGame
function startGame() {
    // Hide the start screen

    // Set the question position to 0
    questionPosition = 0;

    // Display the first question (Display the current question)

    // Set the starting value of 'countdown'
    countdown = 10;

    // Start the timer 'startTimer'
    startTimer(countdown);
        // IF 'countdown' === 0 THEN 'endGame()'
}
    

// Function 'endGame'
function endGame() {
    // Hide the questions area

    // Show the record high score

    // Clear the timer interval to stop it from running
}

// Function 'answerQuestion'
function answerQuestion() {
    //var currentQuestion = questions[questionPosition];

    // Check if the selected answer is correct

        // IF the answer is wrong

            // THEN we need to subtract from 'countdown'

    //Increasing the question position by 1

    // IF I've passed the last question

        // THEN  'endGame()'

    // ELSE
    
        // Display the current question

        // questionPosition++;
        // displayCurrentQuestion();
}
    

// Function 'displayCurrentQuestion'
function displayCurrentQuestion() {
    //questions[questionPosition];

}

// Function 'recordHighScore'