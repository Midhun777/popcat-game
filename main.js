/* window.onload = function() {
	var img = document.getElementById('cat1');
	var count = document.getElementById("score");
	var score = 0;
	var audio = new Audio("/media/pop.mp3");

	img.addEventListener('mousedown', function() {
		increaseScore();
		img.src = '/media/cat2.png';
		audio.play();

	});

	img.addEventListener('mouseup', function() {
		img.src = '/media/cat1.png';
		audio.play();
	});

	function increaseScore() {
		score++;
		count.innerHTML = score;
	}
} */

var img = document.getElementById('cat1');
var audio = new Audio("/media/pop.mp3");
var count = document.getElementById("score");
var score = 0;


function change() {
	img.src = "/media/cat2.png";
	audio.play();
	increaseScore();


}

function reset() {
	img.src = "https://i.postimg.cc/bJLLXRg8/20231113-202840.png";
	audio.play();
}

function imgreset() {
	img.src = "https://i.postimg.cc/bJLLXRg8/20231113-202840.png";
}

function increaseScore() {
	score++;
	count.innerHTML = score;
}

setInterval(imgreset, 340);