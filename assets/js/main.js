var start = $('<button id=startButton>');
var timer = $('');
var quizA = $('#quiz-area');
var questionEl = document.querySelector('#question');
var answerEl = document.querySelector('#answers');

var questions = [
    {
        question: 'what kind of language is JavaScript?',

        answers: [
            { a: 'programming'},
            { b: 'markup'},
            { c: 'germanic' },
        ],
        correct: 'a'
    },
    {
        question: 'What is the name of a container in JavaScript?',

        answers: [
            { a: 'object'},
            { b: 'variable'},
            { c: 'string'},
        ],
        correct: 'b'
    },
    {
        question: 'What year was JavaScript created?',

        answers: [
            { a: '2023'},
            { b: '1974'},
            { c: '1995'},
        ],
        correct: 'c'
    },
    {
        question: 'How long did it take Brendan Eich to develop JavaScipt?',

        answers: [
            { a: '6 months'},
            { b: '3 weeks'},
            { c: '10 days'},
        ],
        correct: 'c'
    },
    {
        question: 'What was JavaScript originally called?',

        answers: [
            { a: 'CoffeeCode'},
            { b: 'Mocha'},
            { c: 'HTML2.0'},
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
    quizTimer();
    askQuestions();
    })

function renderQuestions() {
    answerEl.textContent = '';
    var currentQuestion = questions[currentQuestion - 1];
    var selectedQuestion = questions[index]

    questionEl.textContent = currentQuestion.question;

    for (var i=0; i < currentQuestion.answers.length; i++) {
        var answer = currentQuestion.answers[i].text;

        var li = document.createElement('li');
        li.textContent = answer;
        li.setAttribute('data-q-index', questionIndex);
        li.setAttribute('data-q-answer', answer);
        li.addEventListener('click', handleAnswer);
        answerEl.append(li);
    }
}

function handleAnswer(event) {
    var qIndex = event.target.getAttribute('data-q-index');
    var qAnswer = event.target.getAttribute('data-q-answer');

    var question = questions[qIndex];

    if (qAnswer === question.correct) {
        console.log('correct');
        currentQuestion++;
        renderQuestions(currentQuestion);
    }
    else {
        console.log('incorrect');
    }
}

renderQuestions(currentQuestion);