// DECLARE 'countdown' variable
var countdown = 0;

// DECLARE 'questions' array
var questionPosition = 0;
var questions = [
    {
        //question
        //answers
        answers: ["Answer A", "Answer B"]
        //correct answers
    },
    {
        //question
        //answers
        //correct answers
    }
];

// DECLARE a 'timerInterval'
var timeInterval;

// function startTimer() {
//     var timeLeft = 5;
  
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     timeInterval = setInterval(function () {
//       // As long as the `timeLeft` is greater than 1
//       if (timeLeft > 1) {
//         // Set the `textContent` of `timerEl` to show the remaining seconds
//         timerEl.textContent = timeLeft + ' seconds remaining';
//         // Decrement `timeLeft` by 1
//         timeLeft--;
//       } else if (timeLeft === 1) {
//         // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//         timerEl.textContent = timeLeft + ' second remaining';
//         timeLeft--;
//       } else {
//         // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//         timerEl.textContent = '';
//         // Use `clearInterval()` to stop the timer
//         clearInterval(timeInterval);
//         // Call the `displayMessage()` function
//         displayMessage();
//       }
//     }, 1000);
//   }
  

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
    startTimer();
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