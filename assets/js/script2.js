var questions = ["Commonly used data types DO NOT inculde","Commonly used data types DO NOT inculde","String values must be enclosed within ____ when being assigned to variables","A very useful tool used during development and debugging for printing content to the debugger is:",]

var question1 = [ "strings", "booleans", "alerts", "numbers"];
var question2 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var question3 = [ "commas", "curly brackets", "quotes", "parentheses"];
var question4 = [ "Javascript", "terminal/bash", "for loops", "console.log"];
var answers =  ["strings", "other arrays", "quotes", "parentheses"]

var question11 = {
  q: "Commonly used data types DO NOT inculde",
  answers: [ "strings", "booleans", "alerts", "numbers"],
  correct: "strings"
}

var question22 = {
  q: "String values must be enclosed within ____ when being assigned to variables",
  answers: [ "commas", "curly brackets", "quotes", "parentheses"],
  correct: "parentheses",
}

var question44 = {
  q: "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: [ "Javascript", "terminal/bash", "for loops", "console.log"],
  correct: "console.log",
}

var count = 75;
var timer = setInterval(function() {
  console.log(count);
  count--;
    var question = document.getElementById('question-text');
    question.textContent = question11.q;
    var answer1 = document.getElementById('0');
    answer1.textContent = question11.answers[0];
    var answer2 = document.getElementById('1')
    answer2.textContent = question11.answers[1];
    var answer3 = document.getElementById('2')
    answer3.textContent = question11.answers[2];
    var answer4 = document.getElementById('3')
    answer4.textContent = question11.answers[3];
  
  console.log(answer1);
  if(count === 0) {
    stopInterval()
  }
  document.getElementById("countdown-timer").innerHTML = count
  populate();
}, 1000);


var stopInterval = function() {
  console.log('time is up!');
  clearInterval(timer);
}




setInterval();
stopInterval();

console.log(questions[0], question1, answers[0])

// create the for loop to loop through questions
// we want to generate each questions and possible answers inside the forloop
// target the elements with the id's and change the text content to the questions and answers
//if answer user clicks on is the answers that stored in the answer array, continue to the enxt question
//else lose time 
//optional* go to next questions or user stays on the question until right answer is provided 
