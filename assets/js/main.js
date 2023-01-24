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