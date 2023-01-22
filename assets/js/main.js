var start = $('<button id=startButton>');
var timer = $('<p>');
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

$(start).text('Start');
$(quizA).append(start);

start.on('click', function(event) {
    $(quizA).append(timer);
    console.log(event);
    $(start).remove();
    askQuestions();
    })

askQuestions = function() {
    for(
        var i =0; i < questions.length; i++
    ) {
        questions[i]
    }
}