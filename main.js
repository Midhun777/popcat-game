var img = document.getElementById('cat1');
var audio = new Audio("./media/pop.mp3");
var count = document.getElementById("score");
var score = 0;

function change() {
	img.src = "./media/cat2.png";
	audio.play();
	increaseScore();
}

function reset() {
	img.src = "./media/cat1.png";
	audio.play();
}

function imgreset() {
	img.src = "./media/cat2.png";
}

function increaseScore() {
	score++;
	count.innerHTML = score;
}
