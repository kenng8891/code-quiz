function printHighscores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // sort highscores
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    // initial for each score
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

//clear high scores
document.getElementById("clear").onclick = clearHighscores;

printHighscores();
