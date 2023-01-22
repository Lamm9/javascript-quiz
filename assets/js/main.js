var start = $('<button id=startButton>');
var timer = $('<p>');

$(start).text('Start');
$('section').append(start);

start.on('click', function(event) {
    $('main').append(timer);
    console.log(event);
    $(start).remove();
    })