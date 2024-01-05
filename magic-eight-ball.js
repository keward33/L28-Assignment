// Put your JavaScript code in this file

const answers = [
  "Yes",
  "No",
  "Maybe",
  "Not likely",
  "Cannot predict now",
  "Could be",
];

function displayAnswer() {
  let index = Math.floor(Math.random() * answers.length);
  document.getElementById("circle").innerHTML = answers[index];
  document.getElementById("circle").style.display = "inline-block";
}

ball.addEventListener("mousedown", function () {
  if (document.getElementById("question").value == "") {
    alert("Please ask a question!");
  } else {
    displayAnswer();
  }
});

reset.addEventListener("click", function () {
  document.getElementById("circle").style.display = "none";
});
