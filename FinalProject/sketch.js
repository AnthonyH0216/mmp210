/*
Final Project
MMP210
5.19.2020
*/

//global sound
var playerWins ;
var birdSound;
var music;
var vSlider; 
var vNumber = 10

function preload () {
	birdSound = loadSound("pew.wav");
	music = loadSound("8bit.wav")
}

function setup() {
	createCanvas (640, 360);
	birdSound.playMode("restart"); // the deftault is "sustain"

	var label = createElement("label", "Volume Control:");
	label.position(20,560);

	vSlider = createSlider(0, 20, vNumber);
	vSlider.position(160, 560);
	vSlider.input(volume)
}

function draw() {

	if (music.isPlaying()){
		fill("green")
		ellipse(100,100, 200)
	} else {
		background(51);
		fill("gold");
		ellipse(100,100, 200);
	}
	if (playerWins){
		win ();
	}else {
		game();
	}
}

function win () {

	fill("white");
	text("you won", 100, 100);

}

function game () {

	rect (mouseX,mouseY,10,30); 

	if(mouseIsPressed){
		stroke("red")
		line(mouseX, mouseY,width, mouseY)
	}else{
		stroke("black")
	}
	
} 

function volume() {
	vNumber = vSlider.value();
	music.setVolume(vNumber);
	draw();
}

function mousePressed() {
	birdSound.play();
}

function keyPressed() {

	if (keyCode == 83){
		if (music.isPlaying()){
			music.pause();
		}else{
			music.play();
		}
	}

		if (keyCode == 32){
			playerWins = !playerWins;
		}
}