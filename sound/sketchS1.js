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
		ellipse(width,height/2, 200)
	} else {
		background(51);
		fill("gold");
		ellipse(width,height/2, 200);
	}

	var pan = map (mouseX, 0, width, -1, 1);
	music.pan(pan);

	rect (mouseX,0,10,height); 

	if(mouseIsPressed){
		birdSound.play();
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

function keyPressed() {

	if (keyCode == 32){
			birdSound.play();
		if (music.isPlaying()){
			music.pause();
		}else{
			music.play();
		}
	}


}