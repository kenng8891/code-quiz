var question1 = {
  q: "Commonly used data types DO NOT inculde",
  answers: [ "strings", "booleans", "alerts", "numbers"],
  correct: "strings"
}

var question2 = {
  q: "The condition in an if/else statement is enclosed with:",
  answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
  correct: "curly brackets"
}
var question3 = {
  q: "String values must be enclosed within ____ when being assigned to variables",
  answers: [ "commas", "curly brackets", "quotes", "parentheses"],
  correct: "parentheses",
}

var question4 = {
  q: "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: [ "Javascript", "terminal/bash", "for loops", "console.log"],
  correct: "console.log",
}

var questionCounter = 0;
var selections = [];
var count = 75;

var timer = setInterval(function() {
  console.log(count);
  count--;
  if(count === 0) {
    stopInterval()
  }
  document.getElementById("countdown-timer").innerHTML = count
}, 1000);


var stopInterval = function() {
  clearInterval(timer);
}

setInterval();
stopInterval();

function createButtons(index) {
  var buttonList = $('<ul>');
  var item;
  var input= '';
  for (var i = 0; i < questions[index].answers.length; i++) {
    item = $('<li>');
    input = '<input type ="button" name = "answer" value= ' + i + ' />';
    input += questions[index].answers[i];
    item.append(input);
    buttonList.append(item);
  }
  return buttonList
}
// create the for loop to loop through questions
// we want to generate each questions and possible answers inside the forloop
// target the elements with the id's and change the text content to the questions and answers
//if answer user clicks on is the answers that stored in the answer array, continue to the enxt question
//else lose time 
//optional* go to next questions or user stays on the question until right answer is provided 
