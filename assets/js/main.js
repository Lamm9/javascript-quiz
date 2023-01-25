var start = $('<button id=startButton>');
var timer
var quizA = $('#quiz-area');
var questionEl = document.querySelector('#question');
var answerEl = document.querySelector('#answers');
var currentQuestion = 0;

var questions = [
    {
        question: 'what kind of language is JavaScript?',

        answers: [
            { text: 'programming'},
            { text: 'markup'},
            { text: 'germanic' },
        ],
        correct: 'programming'
    },
    {
        question: 'What is the name of a container in JavaScript?',

        answers: [
            { text: 'object'},
            { text: 'variable'},
            { text: 'string'},
        ],
        correct: 'b'
    },
    {
        question: 'What year was JavaScript created?',

        answers: [
            { text: '2023'},
            { text: '1974'},
            { text: '1995'},
        ],
        correct: 'c'
    },
    {
        question: 'How long did it take Brendan Eich to develop JavaScipt?',

        answers: [
            { text: '6 months'},
            { text: '3 weeks'},
            { text: '10 days'},
        ],
        correct: 'c'
    },
    {
        question: 'What was JavaScript originally called?',

        answers: [
            { text: 'CoffeeCode'},
            { text: 'Mocha'},
            { text: 'HTML2.0'},
        ],
        correct: 'b'
    }
]

$(start).text('Start');
$(quizA).append(start);

start.on('click', function(event) {
    $(quizA).append(timer);
    console.log(event);
    $(start).remove();
    renderQuestions();
    })

function renderQuestions() {
    answerEl.textContent = '';
    var selectedQuestion = questions[currentQuestion];

    questionEl.textContent = selectedQuestion.question;

    for (var i=0; i < selectedQuestion.answers.length; i++) {
        var answer = selectedQuestion.answers[i].text;

        var li = document.createElement('li');
        li.textContent = answer;
        li.setAttribute('data-q-answer', answer);
        li.addEventListener('click', handleAnswer);
        answerEl.append(li);
    }
}

function handleAnswer(event) {
    var qAnswer = event.target.getAttribute('data-q-answer');

    var question = questions[currentQuestion].question;

    if (qAnswer === question.correct) {
        console.log('correct');
        currentQuestion++;
        renderQuestions();
    }
    else {
        console.log('incorrect');
    }
}

function startTimer() {

}