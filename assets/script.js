var startScreenEl = document.querySelector('.start-screen')
var quizBox = document.querySelector('.quiz-box')
var startBtnEl = document.querySelector('.start-btn')
var quiz = document.querySelector('.question-title')
var choices = document.querySelector('.choices')
var timeLeftEl = document.querySelector('#time-left');
var viewScore = document.querySelector('.view-score');

var currentQuestionIndex = 0;
var timeLeft = 5;
var interValId;


var questions = [
    {
        questionsTitle: 'Where did the first NBA game take place?',
        wordChoice:
            [
                'A: Toronto Canada',
                'B: New York',
                'C: Los Angeles',
                'D: Brooklyn'
            ],
        answerIndex: 'A: Toronto Canada'
    },
    {
        questionsTitle: 'Which team won the first-ever NBA game?',
        wordChoice:
            [
                'A: Boston Celtics',
                'B: New York Knicks',
                'C: Toronto Huskies',
                'D: Chicago Stags'
            ],
        answerIndex: 'B: New York Knicks'
    },
    {
        questionsTitle: 'What nickname did Kobe Bryant give to himself?',
        wordChoice:
            [
                'A: KB-24',
                'B: Ocho',
                'C: The Black Mamba',
                'D: Mr.81'
            ],
        answerIndex: 'C: The Black Mamba'
    },
    {
        questionsTitle: 'Which team drafted Kobe Bryant?',
        wordChoice:
            [
                'A: Los Angeles Lakers',
                'B: Charlotte Hornets',
                'C: Undrafted',
                'D: None of the above'
            ],
        answerIndex: 'B: Charlotte Hornets'
    }
]

// function to display the current time in our 'time-left' then modify the time left
/**
When the quiz is running, disable the high score
*/
function functionThatRepeats() {
    viewScore.disabled = true;
    timeLeftEl.textContent = `${timeLeft} second(s)`;
    timeLeft = timeLeft - 1;

    // time up. Let user know the time is up and hide the quiz so it can not be updated. In addition enable the view high score
    if (timeLeft <= 0) {
        clearInterval(interValId);
        timeLeftEl.textContent = 'time up';
        quizBox.classList.add('hide');
        viewScore.disabled = false;
    }
}

function renderCurrentQuestion() {

}

//  function to start the timer
function startTimer() {
    interValId = setInterval(functionThatRepeats, 1000);


}

startBtnEl.addEventListener('click', startTimer);

// function to show current question and choices for that question
function showQuestions() {

    quizBox.classList.remove('hide')
    startScreenEl.classList.add('hide')
    quiz.textContent = questions[0].questionsTitle
    for (var i = 0; i < questions.length; i++) {
        var btn = document.createElement('button')
        btn.textContent = questions[0].wordChoice[i]
        choices.appendChild(btn);

        //if (event.target.textContent === questions[currentQuestionIndex].answer);



    }

}


startBtnEl.addEventListener('click', showQuestions);

