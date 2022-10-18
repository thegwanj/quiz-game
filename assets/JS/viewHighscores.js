// Declaring variables for elements from the DOM
var scoreboard = document.querySelector('#scoreboard');

// Variable for storing what will be displayed on the page later
var content = document.createElement('div');

// Need to get and display each score
// localStorage 'scoresList' and 'initialsList'
try{
    var storedInitials = JSON.parse(localStorage['initialsList']);
    var storedScores = JSON.parse(localStorage['scoresList']);
} catch {
    storedInitials = [];
    storedScores = [];
}

for(var i = 0; i < storedInitials.length; i++) {
    content.innerHTML = `
    
    `;
    console.log(storedInitials[i]);
    console.log(storedScores[i]);

    scoreboard.appendChild(content);
}