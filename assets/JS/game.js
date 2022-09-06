// DECLARE 'countdown' variable

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

var currentQuestion = questions[questionPosition];

// DECLARE the 'timerEl'
var timerEl = document.querySelector('#timer');

// Function startGame
function startGame() {
    // Hide the start screen

    // Set the question position to 0

    // Display the first question (Display the current question)

    // Set the starting value of 'countdown'

    // Start the timer 'startTimer'

        // IF 'countdown' === 0 THEN 'endGame()'
}
    

// Function 'endGame'
function endGame() {
    // Hide the questions area

    // Show the record high score
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