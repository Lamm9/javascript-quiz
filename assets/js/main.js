var start = $('<button id=startButton>');
var timer = $('');
var quizA = $('#quiz-area');


var questions = [
    {
        question: 'what kind of language is JavaScript?',

        answers: {
            a: 'programming',
            b: 'markup',
            c: 'germanic'
        },
        correct: 'a'
    }
]

var questionEl = $('<p>' + questions[0] + '</p>');
var answerEl = $('<p>');

$(start).text('Start');
$(quizA).append(start);

start.on('click', function(event) {
    $(quizA).append(timer);
    console.log(event);
    $(start).remove();
    quizTimer();
    askQuestions();
    })

incrementTimer = function() {
    for (var i = 0; i++;) {
        console.log([i])
    }
}

quizTimer = function() {
    setInterval(incrementTimer,1000);
}

askQuestions = function() {
    for(
        var i =0; i < questions.length; i++
    ) {
        questions[i]
    }
    JSON.stringify(questions);
    $(quizA).append(questionEl);
    $(quizA).append(answerEl);
}