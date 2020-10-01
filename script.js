// grab elements from HTMl

var hihghscoresEl = document.getElementById("highscores");
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var answersEl = document.getElementById("answers");
var startBtnEl = document.getElementById("start-button");
var questionsDiv = document.querySelector(".hide");
var quizDiv = document.querySelector(".quiz-div");
var answerOneBtn = document.querySelector(".choice1");
var answerTwoBtn = document.querySelector(".choice2");
var answerThreeBtn = document.querySelector(".choice3");
var answerFourBtn = document.querySelector(".choice4");
var answerStatusEl = document.getElementById("answer-status");

// global for loop to add bootstrap styling for all buttons that get generated

var buttonsEl = document.querySelectorAll(".btn");
for (var i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].setAttribute("class", "btn btn-primary");
}

//array of objects with questions

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. Strings", "2. Booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },

  {
    question:
      "The condition in an if/else statement is enclosed within _______.",
    choices: [
      "1. Quotes",
      "2. Curly Brackets",
      "3. Parentheses",
      "4. Square Brackets",
    ],
    answer: "3. Parentheses",
  },
  {
    question: "Arrays in Javascript can be used to store _______.",
    choices: [
      "1. Numbers and Strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the above",
    ],
    answer: "4. All of the above",
  },

  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
    answer: "3. Quotes",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. Terminal/Bash",
      "3. For Loops",
      "4. Console.log",
    ],
    answer: "4. Console.log",
  },
];

// console.log(questions);

var questionsIndex = questions.length - 1;

var runningCurrentQuestion = 0;

var timerSeconds = 75;

var interval;

quizDiv.style.display = "none";

function startQuiz() {
  questionsDiv.style.display = "none";
  interval = setInterval(function () {
    timerSeconds--;
    var secondsLeft = timerEl.textContent = "Timer: " + timerSeconds;
  }, 1000);
}

//function to populate questions on screen

function renderQuestion() {
  quizDiv.style.display = "block";

  var currentQuestion = questions[runningCurrentQuestion];

  questionsEl.textContent = currentQuestion.question;

  answerOneBtn.textContent = currentQuestion.choices[0];

  answerTwoBtn.textContent = currentQuestion.choices[1];

  answerThreeBtn.textContent = currentQuestion.choices[2];

  answerFourBtn.textContent = currentQuestion.choices[3];

  quizDiv.appendChild.questionsEl;

  console.log(questionsEl);
}

// function for answer check

function answerCheck(event) {
  if (
    questions[runningCurrentQuestion].choices !==
    questions[runningCurrentQuestion].answer
  ) {
    alert("wrong")
    renderQuestion(runningCurrentQuestion++);
  } else {
    alert("correct");
    renderQuestion(runningCurrentQuestion++);
  }
}

startBtnEl.addEventListener("click", startQuiz);

startBtnEl.addEventListener("click", renderQuestion);

answerOneBtn.addEventListener("click", answerCheck);

answerTwoBtn.addEventListener("click", answerCheck);

answerThreeBtn.addEventListener("click", answerCheck);

answerFourBtn.addEventListener("click", answerCheck);
