$(function(){

//Cache variables
const $userName = $('#userName');
const $submit = $('#submitUsername');
const $scoreboard = $('#score');
const gameDate = new Date();

let score = 0;

$submit.on('click', function() {
    if( $userName.val() != '' ) {
//        console.log($userName.val());
        $('#info').css('display', 'none');
    } else {
        alert('Please fill in your name');
    }
});

function addScore(){
    score = score + 1;
}

//Record when each button is pressed
const $coonButton = $('.selector.coon');
$coonButton.on('click', function() {
//    console.log('Coon', 'Pressed +1');

if ($flashcard.hasClass('slide-01') || $flashcard.hasClass('slide-03') || $flashcard.hasClass('slide-08') || $flashcard.hasClass('slide-10') || $flashcard.hasClass('slide-13') ) {
    addScore()
//    console.log('Score:', score);
    $scoreboard.text(score);
} else {
//    console.log('Score:', score);
}

});

const $catButton = $('.selector.cat');
$catButton.on('click', function() {
//    console.log('Cat', 'Pressed +1');

if ($flashcard.hasClass('slide-02') || $flashcard.hasClass('slide-04') || $flashcard.hasClass('slide-05') || $flashcard.hasClass('slide-07') || $flashcard.hasClass('slide-12') ) {
    addScore()
//    console.log('Score:', score);
    $scoreboard.text(score);
} else {
//    console.log('Score:', score);
}

});

const $bearButton = $('.selector.bear');
$bearButton.on('click', function() {
//    console.log('Bear', 'Pressed +1');

if ($flashcard.hasClass('slide-06') || $flashcard.hasClass('slide-09') || $flashcard.hasClass('slide-11') || $flashcard.hasClass('slide-14') || $flashcard.hasClass('slide-15') || $flashcard.hasClass('slide-16') ) {
    addScore()
//    console.log('Score:', score);
    $scoreboard.text(score);
} else {
//    console.log('Score:', score);
}

});

//Update Flashcard when Selector Button is pressed
const $flashcard = $('#flashcard');
const $buttonClick = $('.selector');
let count = 1;
$buttonClick.on('click', function(){
    count = count + 1;
    if (count <= 9) {
        let newcount = "" + 0 + count;
        $flashcard.css('background-image', 'url(images/' + newcount + '.jpg)');
        $flashcard.removeClass();
        $flashcard.addClass('slide-' + newcount);
    } else if (count <= 16) {
        $flashcard.css('background-image', 'url(images/' + count + '.jpg)');
        $flashcard.css('class', 'slide-' + count );
        $flashcard.removeClass();
        $flashcard.addClass('slide-' + count);
    } else {
        $flashcard.css('display', 'none');
        $('#answer-key').css('display', 'none');

        $('.userResult').html(`Hello <span>${$userName.val()}</span> your final score is <span>${score}</span>`);
        
    };
});




//Reload page to restart game
$('#restart').on('click', function(){
    location.reload();
});

});