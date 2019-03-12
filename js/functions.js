$(function(){
const app = {};
app.username = $('#userName');
app.$submit = $('#submitUsername');
app.$highscore = $('#highscores');
app.score = $('#score');
app.gamedate = new Date();
app.coonButton = $('.selector.coon');
app.catButton = $('.selector.cat');
app.bearButton = $('.selector.bear');
app.flashcard = $('#flashcard');
app.buttonClick = $('.selector');
let score = 0;
let count = 1;
let leaderboard = [];
app.submit = function() {
	if (app.username.val() != '') {
		$('#info').css('display', 'none');
	} else {
		alert('Please fill in your name');
	}
}
function addScore() {
	score = score + 1;
}
function highscore() {
	if (localStorage.getItem('flashcard_highscore') != null) {
		let getLeaderboard = JSON.parse(localStorage.getItem('flashcard_highscore'));
		getLeaderboard.sort(function(a, b) {
			return b.score - a.score;
		});
		for (let i = 0; i < getLeaderboard.length; i = i + 1) {
			$('table#highscore tbody').append(`<tr><td>${getLeaderboard[i].date}</td><td>${getLeaderboard[i].name}</td><td>${getLeaderboard[i].score}</td></tr>`);
		}
	}
}
app.highscore = function() {
	$('#info').css('display', 'none');
	$('#flashcard').css('display', 'none');
	$('#answer-key').css('display', 'none');
	highscore();
}
app.coonButtonClicked = function() {
	if (app.flashcard.hasClass('slide-01') || app.flashcard.hasClass('slide-03') || app.flashcard.hasClass('slide-08') || app.flashcard.hasClass('slide-10') || app.flashcard.hasClass('slide-13')) {
		addScore()
		app.score.text(score);
	}
}
app.catButtonClicked = function() {
	if (app.flashcard.hasClass('slide-02') || app.flashcard.hasClass('slide-04') || app.flashcard.hasClass('slide-05') || app.flashcard.hasClass('slide-07') || app.flashcard.hasClass('slide-12')) {
		addScore()
		app.score.text(score);
	}
}
app.bearButtonClicked = function() {
	if (app.flashcard.hasClass('slide-06') || app.flashcard.hasClass('slide-09') || app.flashcard.hasClass('slide-11') || app.flashcard.hasClass('slide-14') || app.flashcard.hasClass('slide-15') || app.flashcard.hasClass('slide-16')) {
		addScore()
		app.score.text(score);
	}
}
app.buttonClicked = function() {
	count = count + 1;
	if (count <= 9) {
		let newcount = "" + 0 + count;
		app.flashcard.css('background-image', 'url(images/' + newcount + '.jpg)');
		app.flashcard.removeClass();
		app.flashcard.addClass('slide-' + newcount);
	} else if (count <= 16) {
		app.flashcard.css('background-image', 'url(images/' + count + '.jpg)');
		app.flashcard.css('class', 'slide-' + count);
		app.flashcard.removeClass();
		app.flashcard.addClass('slide-' + count);
	} else {
		app.flashcard.css('display', 'none');
		$('#answer-key').css('display', 'none');
		$('.userResult').html(`Hello <span>${app.username.val()}</span> your final score is <span>${app.score.text()}</span>`);
		//console.log(app.gamedate, app.username.val(), app.score.text());
		const game = {
			date: app.gamedate,
			name: app.username.val(),
			score: app.score.text()
		}
		if (localStorage.getItem('flashcard_highscore') != null) {
			let getLeaderboard = JSON.parse(localStorage.getItem('flashcard_highscore'));
			getLeaderboard.push(game);
			localStorage.setItem("flashcard_highscore", JSON.stringify(getLeaderboard));
			highscore();
		} else {
			leaderboard.push(game);
			localStorage.setItem("flashcard_highscore", JSON.stringify(leaderboard));
			highscore();
		}
	};
}
//Reload page to restart game
$('#restart').on('click', function() {
	location.reload();
});
app.init = function() {
	app.$submit.on('click', app.submit);
	app.$highscore.on('click', app.highscore);
	app.coonButton.on('click', app.coonButtonClicked);
	app.catButton.on('click', app.catButtonClicked);
	app.bearButton.on('click', app.bearButtonClicked);
	app.buttonClick.on('click', app.buttonClicked);
}
app.init();
});