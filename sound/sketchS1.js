/*
	sound and keyboard project
	5/12/2020
*/

//global sound
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

	rect(mouseX,mouseY, 50, 10)

	var pan = map (mouseX, 0, width, -1, 1);
	music.pan(pan);

	rect (mouseX,0,10,height); 
}

function volume() {
	vNumber = vSlider.value();
	music.setVolume(vNumber);
	draw();
}

function mousePressed() {
	birdSound.play();

	if (mouseX<width/2 && mouseY<height/2){
		if (music.isPlaying()){
			music.pause();
		}else{
			music.play();
		}
	}
}