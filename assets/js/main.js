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
        question: 'question 2',

        answers: [
            { a: 'answer 1'},
            { b: 'answer 2'},
            { c: 'answer 3'},
        ],
        correct: 'c'
    },
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

function renderQuestions(num) {
    var currentQuestion = questions[num - 1];

    questionEl.textContent = currentQuestion.question;

    for (var i=0; i < currentQuestion.answers.length; i++) {
        var answer = currentQuestion.answers[i].text;

        var li = document.createElement('li');
        li.textContent = answer;
        li.setAttribute('data-q-index', questionIndex);
        li.setAttribute('data-q-answer', answer);
        answerEl.append(li);
    }
}

renderQuestions(1);