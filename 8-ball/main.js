// Passcode Checker

//Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //inputs
  let question = document.getElementById("question").value;
  let randNum = Math.random();

  //check passcode

  if (randNum > 0.8) {
    document.getElementById("output").innerHTML = "Without a Doubt.";
  } else if (randNum > 0.6) {
    document.getElementById("output").innerHTML = "As I see it, yes.";
  } else if (randNum > 0.4) {
    document.getElementById("output").innerHTML = "Concentrate and ask again.";
  } else if (randNum > 0.2) {
    document.getElementById("output").innerHTML = "Don't count on it.";
  } else {
    document.getElementById("output").innerHTML = "Outlook not so good.";
  }

  if (question.length === 0) {
    document.getElementById("output").innerHTML = "Please ask a question...";
  } else if (question === "Does a magic 8 ball actually work?") {
    document.getElementById("output").innerHTML = "How dare you doubt me!";
  } else if (question === "Is JavaScript awesome?") {
    document.getElementById("output").innerHTML = "Of Course!";
  }
}
