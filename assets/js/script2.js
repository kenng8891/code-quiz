var questions = ["Commonly used data types DO NOT inculde","Commonly used data types DO NOT inculde","String values must be enclosed within ____ when being assigned to variables","A very useful tool used during development and debugging for printing content to the debugger is:",]

var question1 = [ "strings", "booleans", "alerts", "numbers"];
var question2 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var question3 = [ "commas", "curly brackets", "quotes", "parentheses"];
var question4 = [ "Javascript", "terminal/bash", "for loops", "console.log"];


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
  console.log('time is up!');
  clearInterval(timer);
}

setInterval();
stopInterval();