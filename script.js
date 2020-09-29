// grab elements from HTMl

var hihghscoresEl = document.getElementById("highscores")
var timerEl = document.getElementById("timer")
var questionsEl = document.getElementById("questions")
var answersEl = document.getElementById("answers")
var startBtnEl = document.getElementById("start-button")
var questionsDiv = document.querySelector(".hide")
// var answerTwoBtn = document.getElementById("answer-two")
// var answerThreeBtn = document.getElementById("answer-three")
// var answerFourBtn = document.getElementById("answer-four")


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
        choices: [
            "answerOne",
            "answerTwo",
            "answerThree",
            "answerFour"
        ],
            answer: "answerOne"
    },

    {
        question: "Test question2",
        choices: [
            "answerOne",
            "answerTwo",
            "answerThree",
            "answerFour"
        ],
            answer: "answerTwo"
    }

]

// console.log(questions);

var questionsIndex = questions.length -1;

var runningCurrentQuestion = 0;

function startQuiz(){
    questionsDiv.style.display = "none"
}

function renderQuestion(){
    var currentQuestion = questions[runningCurrentQuestion];

    var choiceButton = document.createElement("button")
    
    questionsEl.textContent = currentQuestion.question


    questionsDiv.appendChild.questionsEl
    

    console.log(questionsEl)
}

startBtnEl.addEventListener("click", startQuiz)

// startBtnEl.addEventListener("click", renderQuestion)