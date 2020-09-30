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

// submitBtnEl.setAttribute("class", "btn btn-primary")

// submitBtnEl.setAttribute("class", "btn btn-primary")

var buttonsEl = document.querySelectorAll(".btn");
for (var i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].setAttribute("class", "btn btn-primary");
}

//array of objects with questions

var questions = [
  {
    question: "Test question1",
    choices: ["answerOne", "answerTwo", "answerThree", "answerFour"],
    answer: "answerOne",
  },

  {
    question: "Test question2",
    choices: ["answerOne", "answerTwo", "answerThree", "answerFour"],
    answer: "answerTwo",
  },
];

// console.log(questions);

var questionsIndex = questions.length - 1;

var runningCurrentQuestion = 0;

var timerSeconds = 0;

var interval;

quizDiv.style.display = "none";

function startQuiz() {
  questionsDiv.style.display = "none";
  interval = setInterval(function(){
      timerSeconds--;
      var secondsLeft = Math.floor(timerSeconds / 75)
      timerEl.textContent = "Timer: " + secondsLeft
  })
}

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

function answerCheck(event){
    if(questions[runningCurrentQuestion].choices !== questions[runningCurrentQuestion].answer){
        alert("wrong")
        renderQuestion(runningCurrentQuestion++);
    }else{
        alert("correct")
        renderQuestion(runningCurrentQuestion++)
    }
}

startBtnEl.addEventListener("click", startQuiz);

startBtnEl.addEventListener("click", renderQuestion);

answerOneBtn.addEventListener("click", answerCheck)